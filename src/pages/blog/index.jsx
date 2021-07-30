import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Layout } from 'antd';
import Header from '../../components/PageLayout/Header';

import SidebarWrapper from '../../components/PageLayout/Sidebar';
import SEO from '../../components/Seo';
import BlogPostItem from '../../components/BlogPostItem';

const Blog = ({ data }) => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SEO title="Blog" description="Here is all my blog posts." path="blog" />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Blog</h1>
        </div>
        {data.allMarkdownRemark
            && data.allMarkdownRemark.edges.map((val, key) => (
              // eslint-disable-next-line react/no-array-index-key
              <BlogPostItem key={key} data={val} />
            ))}
      </SidebarWrapper>
    </Layout>
  </Layout>
);

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/index.md$/" } }
    ) {
      edges {
        node {
          frontmatter {
            date
            path
            title
            tags
            cover {
              childImageSharp {
                fluid(maxWidth: 288) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`;

export default Blog;
