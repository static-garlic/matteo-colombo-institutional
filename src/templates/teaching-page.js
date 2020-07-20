import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import {HTMLContent} from '../components/Content'
import {SectionJumbotron} from "../components/SectionJumbotron";
import {Col, Container, Row} from "reactstrap";
import {Instructor} from "../components/Instructor";
import {CourseCoordinator} from "../components/CourseCoordinator";

export const TeachingPageTemplate = ({title, courseCoordinator, instructor}) => {

  return (
    <Fragment>
      <SectionJumbotron title={title}/>
      <Container>
        <Row>
          <Col>
            <CourseCoordinator courseCoordinator={courseCoordinator} />
          </Col>
        </Row>
        <Row className="pt-4">
          <Col>
            <Instructor instructor={instructor} />
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
};

TeachingPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  courseCoordinator: PropTypes.shape({
      role: PropTypes.string,
      courses: PropTypes.arrayOf(
        PropTypes.shape(
          {
            topic: PropTypes.string
          }
        )
      )
    }
  ),
  instructor: PropTypes.shape({
      role: PropTypes.string,
      teachings: PropTypes.arrayOf(
        PropTypes.shape(
          {
            topic: PropTypes.string,
            lectures: PropTypes.arrayOf(
              PropTypes.shape({
                  title: PropTypes.string,
                  course: PropTypes.string,
                  university: PropTypes.string,
                  year: PropTypes.string,
                  studentsEvaluationsFile: PropTypes.object,
                }
              )
            )
          }
        )
      )
    }
  ),
};

const TeachingPage = ({data}) => {
  const {markdownRemark: teachings} = data;

  return (
    <Layout>
      <TeachingPageTemplate
        contentComponent={HTMLContent}
        title={teachings.frontmatter.title}
        courseCoordinator={teachings.frontmatter.courseCoordinator}
        instructor={teachings.frontmatter.instructor}
      />
    </Layout>
  )
};

TeachingPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TeachingPage

export const teachingPage = graphql`
  query teachingPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        courseCoordinator {
          role
          courses {
            topic
          }
        }
        instructor {
          role
          teachings {
            topic
            lectures {
              title
              course
              university
              year
              studentsEvaluationsFile {
                absolutePath
              }
            }
          }
        }
      }
    }
  }
`;