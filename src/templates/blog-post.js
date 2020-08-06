import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Footer from '../components/footer'
import Sidebar from '../components/Sidebar'
import './blog-post.css'

import heroStyles from '../components/hero.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const sidebarStory = get(this, 'props.data.allContentfulSidebarStory.edges')

    return (
      <Layout location={this.props.location}>

        <div className="content-container">
          <div className="left-ad"></div>

          <div className="blog-post" style={{ background: '#fff' }}>
            <Helmet title={`${post.title} | ${siteTitle}`} />
            <div className={`hero ${heroStyles.hero}`}>
              <Img
                className={heroStyles.heroImage}
                alt={post.title}
                fluid={post.heroImage.fluid}
              />
            </div>
            <div className="wrapper">
              <h1 className="section-headline">{post.title}</h1>
              <p
                style={{
                  display: 'block',
                }}
              >
                {post.publishDate}
              </p>
              <div
                dangerouslySetInnerHTML={{
                  __html: post.body.childMarkdownRemark.html,
                }}
              />
            </div>
          </div>

          <ul className="sidebar">
            {sidebarStory.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <Sidebar sidebarStory={node} sidebarBody={node.body.content[0].content[0].value}/>
                </li>
              )
            })}
          </ul>
        
        <div className="right-ad"></div>
        </div>
        <Footer />

      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {

    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulSidebarStory(sort: {order: DESC}) {
      edges {
        node {
          author {
            name
          }
          body {
            body
            content {
              content {
                value
              }
            }
          }
          publishDate(formatString: "MMMM Do YYYY")
          slug
          subject
          title
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
