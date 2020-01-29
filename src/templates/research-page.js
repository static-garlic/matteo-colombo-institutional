import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import {SectionJumbotron} from "../components/SectionJumbotron";
import {Container, Col, Row} from "reactstrap";

export const ResearchPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
      <Fragment>
        <SectionJumbotron title={title} />
        <Container>
          <Row>
            <Col>
              <p>
                <PageContent className="content" content={content}/>
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
  )
};

ResearchPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ResearchPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ResearchPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
};

ResearchPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ResearchPage

export const researchPage = graphql`
  query ResearchPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;