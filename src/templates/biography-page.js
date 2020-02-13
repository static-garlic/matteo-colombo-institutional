import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {graphql, Link} from 'gatsby'
import Layout from '../components/Layout'
import Content, {HTMLContent} from '../components/Content'
import {SectionJumbotron} from "../components/SectionJumbotron";
import {Container, Col, Row} from "reactstrap";
import {IndexPageTemplate} from "./index-page";


export const BiographyPageTemplate = ({title, content, contentComponent, relativeLinks, cvFile}) => {
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
              {
                relativeLinks.map(relativeLink =>
                    <p>
                      {`${relativeLink.text} `}
                      <Link to={relativeLink.link}>
                        {relativeLink.linkText}
                      </Link>
                    </p>
                )
              }
            </Col>
          </Row>
          <p>*{cvFile}*</p>
        </Container>
      </Fragment>
  )
};

BiographyPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  relativeLinks: PropTypes.array,
  cvFile: PropTypes.string
};

const BiographyPage = ({data}) => {
  const {markdownRemark: biography} = data;

  return (
      <Layout>
        <BiographyPageTemplate
            contentComponent={HTMLContent}
            title={biography.frontmatter.title}
            content={biography.html}
            relativeLinks={biography.frontmatter.relativeLinks}
            cvFile={biography.frontmatter.cvFile}

        />
      </Layout>
  )
};

BiographyPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BiographyPage

export const biographyPage = graphql`
  query BiographyPage {
    markdownRemark(frontmatter: { templateKey: { eq: "biography-page" } }) {
      html
      frontmatter {
        title
        relativeLinks {
          text
          linkText
          link
        }
        cvFile
      }
    }
  }
`;