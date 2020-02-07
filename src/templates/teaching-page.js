import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import {HTMLContent} from '../components/Content'
import {SectionJumbotron} from "../components/SectionJumbotron";
import {Col, Container, Row} from "reactstrap";
import {Teachings} from "../components/Teachings";

export const TeachingPageTemplate = ({title, modules, guestLectures}) => {

  return (
    <Fragment>
      <SectionJumbotron title={title}/>
      <Container>
        <Row>
          <Col>
            <Teachings teachings={modules} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Teachings teachings={guestLectures} />
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
};

TeachingPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  modules: PropTypes.shape({
      teachingType: PropTypes.string,
      teachings: PropTypes.arrayOf(
        PropTypes.shape(
          {
            topic: PropTypes.string,
            lectures: PropTypes.arrayOf(
              PropTypes.shape({
                  title: PropTypes.string,
                  course: PropTypes.string,
                  university: PropTypes.string,
                  year: PropTypes.string
                }
              )
            )
          }
        )
      )
    }
  ),
  guestLectures: PropTypes.shape({
      teachingType: PropTypes.string,
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
                  linkSection: PropTypes.shape(
                    {
                      linksText: PropTypes.string,
                      links: PropTypes.arrayOf(
                        PropTypes.shape(
                          {
                            text: PropTypes.string,
                            link: PropTypes.string
                          }
                        )
                      )
                    }
                  )
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
        modules={teachings.frontmatter.modules}
        guestLectures={teachings.frontmatter.guestLectures}
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
        modules {
          teachingType
          teachings {
            topic
            lectures {
              title
              course
              university
              year
            }
          }
        }
        guestLectures {
          teachingType
          teachings {
            topic
            lectures {
              title
              course
              university
              year
              linkSection {
                linksText
                links {
                  text
                  link
                }
              }
            }
          }
        }
      }
    }
  }
`;