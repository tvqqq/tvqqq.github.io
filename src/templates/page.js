import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
* Single page (/:slug)
*
* This file renders a single page and loads all the content.
*
*/
const Page = ({ data, location }) => {
    const page = data.markdownRemark;

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="page"
            />
            <Layout>
                <div className="container">
                    <article className="content">
                        <h1 className="content-title">{page.frontmatter.title}</h1>

                        {/* The main page content */}
                        <section
                            className="content-body load-external-scripts"
                            dangerouslySetInnerHTML={{ __html: page.html }}
                        />
                    </article>
                </div>
            </Layout>
        </>
    )
}

Page.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            excerpt: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
}

export default Page

export const postQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
                feature_image {
                    childImageSharp {
                      fluid(maxWidth: 1000, maxHeight: 500) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                author {
                    frontmatter {
                        name
                        profile_image
                        twitter
                        facebook
                        website
                    }
                }
                tags {
                    frontmatter {
                        name
                        slug
                    }
                }
                meta_description
                comment,
                id
            }
            excerpt
        }
    }
`
