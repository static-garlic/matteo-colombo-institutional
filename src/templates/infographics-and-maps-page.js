import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import {SectionJumbotron} from "../components/SectionJumbotron";
import {Col, Container, Row} from "reactstrap";
import {InfographicsGallery} from "../components/InfographicsGallery";

export const InfographicsAndMapsPageTemplate = ({ title, subtitle, infographicsList, disclaimer }) => {

  return (
    <Fragment>
      <SectionJumbotron title={title}/>
      <Container>
        <Row>
          <Col>
            <h6 className="pb-3">{subtitle}</h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <InfographicsGallery infographicsList={infographicsList} />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="pt-4">{disclaimer}</p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

InfographicsAndMapsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  infographicsList: PropTypes.array,
  disclaimer: PropTypes.string
}

const InfographicsAndMapsPage = ({ data }) => {
  const { markdownRemark: infographics } = data

  return (
    <Layout>
      <InfographicsAndMapsPageTemplate
        title={infographics.frontmatter.title}
        subtitle={infographics.frontmatter.subtitle}
        infographicsList={infographics.frontmatter.infographicsList}
        disclaimer={infographics.frontmatter.disclaimer}
      />
    </Layout>
  )
}

InfographicsAndMapsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default InfographicsAndMapsPage

export const infographicsAndMapsPage = graphql`
  query infographicsAndMapsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        infographicsList {
          image {
            relativePath
            childImageSharp {
              fixed {
                height
                width
              }
            }
          }
          caption {
            text
            link
          }
        }
        disclaimer
      }
    }
  }
`