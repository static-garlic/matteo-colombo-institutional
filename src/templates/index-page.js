import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'

import Layout from '../components/Layout'
import {Col, Container, Jumbotron, Row} from "reactstrap";
import {SectionCards} from "../components/SectionCards";

export const IndexPageTemplate = ({
                                    image,
                                    title,
                                    sectionCards
                                  }) => (
    <div className="IndexPage">
      <Jumbotron
          fluid style={{
        background: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            }) no-repeat center center`,
        height: "30rem",
        backgroundSize: "cover",
        display: "flex"
      }}
      >
        <Row className="my-auto">
          <Col sm={{size: 6, offset: 1}}>
            <h2 className="py-2 text-white">
              {title}
            </h2>
          </Col>
        </Row>
      </Jumbotron>
      <Container fluid className="px-lg-5">
        <SectionCards sectionCards={sectionCards}/>
      </Container>
    </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  sectionCards: PropTypes.array
};

const IndexPage = ({data}) => {
  const {frontmatter} = data.markdownRemark;

  return (
      <Layout>
        <IndexPageTemplate
            image={frontmatter.image}
            title={frontmatter.title}
            sectionCards={frontmatter.sectionCards}
        />
      </Layout>
  )
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxHeight: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sectionCards {
          sectionImage {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          sectionTitle
          sectionDesc
          link
        }
      }
    }
  }
`;
