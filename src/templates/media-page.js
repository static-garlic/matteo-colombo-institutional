import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import {SectionJumbotron} from "../components/SectionJumbotron";
import {Col, Container, Row} from "reactstrap";
import {MediaList} from "../components/MediaList";

export const MediaPageTemplate = ({ title, sectionIntro, content, contentComponent, press, television, videos }) => {
  const PageContent = contentComponent || Content

  return (
    <Fragment>
      <SectionJumbotron title={title}/>
      <Container>
        <Row className="pb-4">
          <Col>
            <h6>{sectionIntro}</h6>
          </Col>
        </Row>
        <Row>
          <Col>
            {
              <MediaList mediaList={press} />
            }
          </Col>
        </Row>
        <Row>
          <Col>
            {
              <MediaList mediaList={television} />
            }
          </Col>
        </Row>
        <Row>
          <Col>
            {
              <MediaList mediaList={videos} />
            }
          </Col>
        </Row>
        <Row className="pt-2">
          <Col>
            <PageContent className="content" content={content} />
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

MediaPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  sectionIntro: PropTypes.string,
  press: PropTypes.object,
  television: PropTypes.object,
  videos: PropTypes.object,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const MediaPage = ({ data }) => {
  const { markdownRemark: media } = data

  return (
    <Layout>
      <MediaPageTemplate
        contentComponent={HTMLContent}
        title={media.frontmatter.title}
        sectionIntro={media.frontmatter.sectionIntro}
        press={media.frontmatter.press}
        television={media.frontmatter.television}
        videos={media.frontmatter.videos}
        content={media.html}
      />
    </Layout>
  )
}

MediaPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default MediaPage

export const mediaPage = graphql`
  query mediaPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        sectionIntro
        press {
          mediaType
          mediaPerLanguage {
            language
            mediaList {
              title
              author
              year
              publishedOn
              link
            }
          }
        }
        television {
          mediaType
          mediaPerLanguage {
            language
            mediaList {
              title
              year
              publishedOn
              link
            }
          }
        }
        videos {
          mediaType
          mediaPerLanguage {
            language
            mediaList {
              title
              year
              publishedOn
              link
            }
          }
        }
      }
    }
  }
`