import React, {Fragment} from 'react'
import PropTypes, {number} from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import {TechnicalSkill} from "../components/TechnicalSkill";
import {SectionJumbotron} from "../components/SectionJumbotron";
import {Col, Container, Row} from "reactstrap";

export const TechnicalSkillsPageTemplate = ({title, technicalSkillsList}) => {

  return (
    <Fragment>
      <SectionJumbotron title={title}/>
      <Container>
        <Row>
          <Col>
            {technicalSkillsList.map((technicalSkill) => <TechnicalSkill technicalSkill={technicalSkill}/>)}
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

TechnicalSkillsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  technicalSkillsList: PropTypes.arrayOf(
    PropTypes.shape({
        skillName: PropTypes.string,
        level: number
      }
    )
  )
}

const TechnicalSkillsPage = ({data}) => {
  const {markdownRemark: technicalSkills} = data

  return (
    <Layout>
      <TechnicalSkillsPageTemplate
        title={technicalSkills.frontmatter.title}
        technicalSkillsList={technicalSkills.frontmatter.technicalSkillsList}
      />
    </Layout>
  )
}

TechnicalSkillsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TechnicalSkillsPage

export const technicalSkillsPage = graphql`
  query technicalSkillsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        technicalSkillsList {
          skillName
          level
        }
      }
    }
  }
`