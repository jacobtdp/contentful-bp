import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';
import '../components/card.css';

class Crabbing extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      siteTitle: get(this, 'props.data.site.siteMetadata.title'),
      posts: get(this, 'props.data.allContentfulBlogPost.edges'),
      sidebarStory: get(this, 'props.data.allContentfulSidebarStory.edges'),
      postsArray: [],
      newPostsArray: [],
      sidebarStoryArray: [],
      subjectToList: ''
    }
  }

  componentWillMount() {

    let path;
    let subjectToList = 'Fishing';

    if (typeof window !== 'undefined') {
        path = window.location.href.replace('https://grand-boilerplate.netlify.app/', '');
        if(window.location.href.slice(0, 22) == 'http://localhost:8000/'){
          path = window.location.href.replace('http://localhost:8000/', '');
        }
        if(path.charAt(path.length - 1) == '/'){
          path = path.slice(0, path.length - 1);
        }
        subjectToList = path.charAt(0).toUpperCase().concat('', path.slice(1));        
    }

    this.state.posts.map(({ node }) => {
      let realNode = { node };
        if(realNode.node.subject == subjectToList) {
            this.state.postsArray.push(realNode);
        }
    });

    this.state.sidebarStory.map(({ node }) => {
      let realNode = { node };
      this.state.sidebarStoryArray.push(realNode);
    });
  }



  render() {
    return (
      <Layout location={this.props.location}>
        <div className="content-container">
          <div className="left-ad"></div>
          <div>
            <Helmet title={this.state.siteTitle} />
            <div className="wrapper">
              <ul className="article-list">
                {this.state.postsArray.map(({ node }) => {
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
            {this.state.sidebarStoryArray.map(({ node }) => {
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

export default Crabbing

export const pageQuery = graphql`
  query CrabbingQuery {

    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          subject
          publishDate(formatString: "MMMM Do, YYYY")
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
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
              ...GatsbyContentfulFluid_tracedSVG
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
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
