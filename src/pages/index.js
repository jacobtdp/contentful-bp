import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';
import '../components/card.css';

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')
    const sidebarStory = get(this, 'props.data.allContentfulSidebarStory.edges')


    return (
      <Layout location={this.props.location}>

        <div className="content-container">
          <div className="left-ad"></div>

          <div>
            <Helmet title={siteTitle} />
            <div className="wrapper">
              <ul className="article-list">
                {posts.map(({ node }) => {
                  return (
                    <li key={node.slug} className="card2">
                      <ArticlePreview article={node} />
                    </li>
                  )
                })}
              </ul>
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

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {

    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          subject
          publishDate(formatString: "MMMM Do, YYYY")
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
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

    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
