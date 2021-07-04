/* eslint-disable react/forbid-prop-types */
/* Vendor imports */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import {
  Layout, Row, Col, Typography,
} from 'antd';
/* App imports */
import SEO from '../../components/Seo';
import Header from '../../components/PageLayout/Header';
import PostCard from '../../components/PostCard';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import Config from '../../../config';
import Utils from '../../utils/pageUtils';
import * as style from './tags.module.less';

const TagPage = ({ data, pageContext }) => {
  const { Text } = Typography;
  const { tag } = pageContext;
  const tagName = `#${tag}`;
  const tagPagePath = Config.pages.tag;
  const tagImage = data.allFile.edges.find((edge) => edge.node.name === tag).node
    .childImageSharp;
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout className="outerPadding">
      <Layout className="container">
        <Header />
        <SEO
          title={tagName}
          description={`All posts about ${tagName}. ${Config.tags[tag].description} `}
          path={Utils.resolvePageUrl(tagPagePath, tag)}
          keywords={[tagName]}
          imageUrl={tagImage.fixed.src}
        />
        <SidebarWrapper>
          <div className={`marginTopTitle ${style.tagsList}`}>
            <Row gutter={10}>
              <Col xs={8} sm={6} md={6} lg={4}>
                <div className={style.bannerImgContainer}>
                  <Img className={style.bannerImg} fluid={tagImage.fluid} alt={tagName} />
                </div>
              </Col>
              <Col xs={16} sm={18} md={18} lg={20}>
                <h1 style={{ color: Config.tags[tag].color }}><strong>{tagName}</strong></h1>
                <Text code>{Config.tags[tag].description}</Text>
              </Col>
            </Row>
          </div>
          <Row gutter={[20, 20]}>
            {posts.map((post, key) => (
            // eslint-disable-next-line react/no-array-index-key
              <Col key={key} xs={24} sm={24} md={12} lg={8}>
                <PostCard data={post} />
              </Col>
            ))}
          </Row>
        </SidebarWrapper>
      </Layout>
    </Layout>
  );
};

TagPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
    allFile: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            name: PropTypes.string.isRequired,
            childImageSharp: PropTypes.shape({
              fluid: PropTypes.object.isRequired,
            }).isRequired,
          }).isRequired,
        }),
      ).isRequired,
    }).isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }).isRequired,
};

export const pageQuery = graphql`query ($tag: String!) {
  allMarkdownRemark(
      filter: {
        frontmatter: { tags: { in: [$tag] } }
        fileAbsolutePath: { regex: "/index.md$/" }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
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
    allFile(filter: { name: { eq: $tag }, dir: { regex: "/tags$/" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed_tracedSVG
            },
            fluid(maxWidth: 300, maxHeight: 300) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default TagPage;
