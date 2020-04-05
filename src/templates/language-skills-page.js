import React, {Fragment} from 'react'
import PropTypes, {number} from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import {Skill} from "../components/Skill";
import {SectionJumbotron} from "../components/SectionJumbotron";
import {Col, Container, Row} from "reactstrap";

export const LanguageSkillsPageTemplate = ({title, nativeSpeaker, languageSkillsList}) => {
  const languageSkillLevels = [
    "A1",
    "A2",
    "B1",
    "B2",
    "C1",
    "C2"
  ];

  const skillNameColSize = "2";

  return (
    <Fragment>
      <SectionJumbotron title={title}/>
      <Container className="LanguageSkills">
        <Row className="pb-4">
          <Col xs={skillNameColSize || "4"} className="align-self-end">
            <h4 className="mb-0">{nativeSpeaker}</h4>
          </Col>
          <Col xs={skillNameColSize ? 12 - skillNameColSize : 8}>
            <h4 className="mb-0">Native Speaker</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            {languageSkillsList.map((languageSkill) => <Skill skill={languageSkill} skillLevels={languageSkillLevels} skillNameColSize={skillNameColSize}/>)}
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

LanguageSkillsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  nativeSpeaker: PropTypes.string,
  languageSkillsList: PropTypes.arrayOf(
    PropTypes.shape({
        skillName: PropTypes.string,
        level: number
      }
    )
  )
}

const LanguageSkillsPage = ({data}) => {
  const {markdownRemark: languageSkills} = data

  return (
    <Layout>
      <LanguageSkillsPageTemplate
        title={languageSkills.frontmatter.title}
        nativeSpeaker={languageSkills.frontmatter.nativeSpeaker}
        languageSkillsList={languageSkills.frontmatter.languageSkillsList}
      />
    </Layout>
  )
}

LanguageSkillsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default LanguageSkillsPage

export const languageSkillsPage = graphql`
  query languageSkillsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        nativeSpeaker
        languageSkillsList {
          skillName
          level
        }
      }
    }
  }
`