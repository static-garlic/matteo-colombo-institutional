import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import {SectionJumbotron} from "../components/SectionJumbotron";
import {Col, Container, Row} from "reactstrap";
import {Books} from "../components/Books";
import {PeerArticles} from "../components/PeerArticles";
import {StandardPublications} from "../components/StandardPublications";

export const PublicationsPageTemplate = ({title, books, peerArticles, thinkTankArticles, chapterEBooks, newspaperArticles, infographicsMaps}) => {

  return (
    <Fragment>
      <SectionJumbotron title={title}/>
      <Container>
        <Row>
          <Col>
            {
              <Books books={books} />
            }
            {
              <PeerArticles peerArticles={peerArticles} />
            }
            {
              <StandardPublications publications={chapterEBooks} />
            }
            {
              <StandardPublications publications={thinkTankArticles} />
            }
            {
              <StandardPublications publications={newspaperArticles} />
            }
            {
              <StandardPublications publications={infographicsMaps} />
            }
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
};

PublicationsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.object,
  peerArticles: PropTypes.object,
  thinkTankArticles: PropTypes.object,
  chapterEBooks: PropTypes.object,
  newspaperArticles: PropTypes.object,
  infographicsMaps: PropTypes.object
};

const PublicationsPage = ({data}) => {
  const {markdownRemark: publications} = data;

  return (
    <Layout>
      <PublicationsPageTemplate
        title={publications.frontmatter.title}
        books={publications.frontmatter.books}
        peerArticles={publications.frontmatter.peerArticles}
        thinkTankArticles={publications.frontmatter.thinkTankArticles}
        chapterEBooks={publications.frontmatter.chapterEBooks}
        newspaperArticles={publications.frontmatter.newspaperArticles}
        infographicsMaps={publications.frontmatter.infographicsMaps}
      />
    </Layout>
  )
};

PublicationsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PublicationsPage

export const publicationsPage = graphql`
  query publicationsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        books {
          title
          bookList {
            title
            author
            year
            publishedOn
          }
        }
        peerArticles {
          title
          articles {
            title
            author
            year
            publishedOn
            section
            pages
          }
        }
        thinkTankArticles {
          title
          subtitle
          articlesPerLanguage {
            language
            articles {
              title
              author
              year
              publishedOn
              link
            }
          }
        }
        chapterEBooks {
          title
          articlesPerLanguage {
            language
            articles {
              title
              author
              year
              publishedOn
              link
            }
          }
        }
        newspaperArticles {
          title
          articlesPerLanguage {
            language
            articles {
              title
              author
              year
              publishedOn
              link
            }
          }
        }
        infographicsMaps {
          title
          articlesPerLanguage {
            language
            articles {
              title
              year
              publishedOn
              link
            }
          }
          additionalInfo
          additionalInfoLink
        }
      }
    }
  }
`;