/* Vendor imports */
const path = require('path');
/* App imports */
const config = require('./config');
const utils = require('./src/utils/pageUtils');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
        edges {
          node {
            frontmatter {
              path
              tags
            }
            fileAbsolutePath
          }
          next {
            frontmatter {
              path
              title
            }
          }
          previous {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }    
  `).then((result) => {
    if (result.errors) return Promise.reject(result.errors);

    const { allMarkdownRemark } = result.data;

    /* Post pages */
    allMarkdownRemark.edges.forEach(({ node, next, previous }) => {
      // Check path prefix of post
      if (node.frontmatter.path.indexOf(config.pages.blog) !== 0) {
        // eslint-disable-next-line no-throw-literal
        throw `Invalid path prefix: ${node.frontmatter.path}`;
      }

      createPage({
        path: node.frontmatter.path,
        component: path.resolve('src/templates/post/post.jsx'),
        context: {
          postPath: node.frontmatter.path,
          translations: utils.getRelatedTranslations(node, allMarkdownRemark.edges),
          next,
          previous,
        },
      });
    });
    const regexForIndex = /index\.md$/;
    // Posts in default language, excluded the translated versions
    const defaultPosts = allMarkdownRemark.edges
      .filter(({ node: { fileAbsolutePath } }) => fileAbsolutePath.match(regexForIndex));

    /* Tag pages */
    const allTags = [];
    defaultPosts.forEach(({ node }) => {
      node.frontmatter.tags.forEach((tag) => {
        if (allTags.indexOf(tag) === -1) allTags.push(tag);
      });
    });

    allTags
      .forEach((tag) => {
        createPage({
          path: utils.resolvePageUrl(config.pages.tag, tag),
          component: path.resolve('src/templates/tags/index.jsx'),
          context: {
            tag,
          },
        });
      });

    return 1;
  });
};

exports.onCreateWebpackConfig = ({
  actions, stage, plugins, getConfig,
}) => {
  if (stage === 'build-javascript' || stage === 'develop') {
    const configGet = getConfig();
    const miniCssExtractPlugin = configGet.plugins.find(
      (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin',
    );
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true;
    }
    actions.replaceWebpackConfig(configGet);
  }
  if (stage === 'build-javascript' || stage === 'develop') {
    actions.setWebpackConfig({
      plugins: [
        plugins.provide({ process: 'process/browser' }),
      ],
    });
  }
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        path: require.resolve('path-browserify'),
        os: require.resolve('os-browserify/browser'),
        fs: false,
      },
    },
  });
};
