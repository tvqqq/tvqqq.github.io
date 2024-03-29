import React from 'react';
import { Layout, Row, Col } from 'antd';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import SEO from '../../components/Seo';
import Comments from '../../components/Comment';
import Utils from '../../utils/pageUtils';

import 'prismjs/themes/prism-solarizedlight.css';
import './highlight-syntax.less';
import * as style from './post.module.less';

const Post = ({ data, pageContext }) => {
  const { next, previous } = pageContext;
  const { html, frontmatter, excerpt } = data.markdownRemark;
  const {
    title, cover: { childImageSharp: { fluid } }, path, date, tags,
  } = frontmatter;

  return (
    <Layout className="outerPadding">
      <Layout className="container">
        <SEO
          title={title}
          description={excerpt}
          path={path}
          keywords={['quyentat', 'tatviquyen', 'tvq']}
          imageUrl={fluid.src}
        />
        <Header />
        <SidebarWrapper>
          <div className="marginTopTitle">
            <h1 className={style.blogTitle}>{title}</h1>
            <div className={style.meta}>
              <span>{moment(new Date(date)).format('DD-MM-YYYY')}</span>
              <span style={{ margin: '0px 2px 0 -2px', color: '#ccc' }}>
                {' '}
                <FontAwesomeIcon icon={faHashtag} size="sm" fixedWidth />
              </span>
              <span>
                {`${tags.join(', ')}`}
              </span>
            </div>
            <div className={style.bannerImgContainer}>
              <Img className={style.bannerImg} fluid={fluid} title={excerpt} alt={title} />
            </div>
            <article className={style.blogArticle} dangerouslySetInnerHTML={{ __html: html }} />
            <Row className={style.blogNav}>
              <Col span={12}>
                {next && (
                <Link to={Utils.resolvePageUrl(next.frontmatter.path)}>
                  <div className={style.navPost}>
                    <FontAwesomeIcon icon={faArrowCircleLeft} />
                    <span>{next.frontmatter.title}</span>
                  </div>
                </Link>
                )}
              </Col>
              <Col span={12}>
                {previous && (
                <Link to={Utils.resolvePageUrl(previous.frontmatter.path)}>
                  <div className={style.navPost} style={{ alignItems: 'flex-end', textAlign: 'right' }}>
                    <FontAwesomeIcon icon={faArrowCircleRight} />
                    {previous.frontmatter.title}
                  </div>
                </Link>
                )}
              </Col>
            </Row>
            {tags.includes('code')
            && <Comments />}
          </div>
        </SidebarWrapper>
      </Layout>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($postPath: String!) {
    markdownRemark(frontmatter: { path: { eq: $postPath } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        date(formatString: "DD MMM YYYY")
        tags
        path
        cover {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 300) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
    allMarkdownRemark(
      filter: {
        frontmatter: { path: { ne: $postPath } }
        fileAbsolutePath: { regex: "/index.md$/" }
      }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            title
            tags  
            cover {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Post;
