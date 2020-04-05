import React from 'react'
import {Col, Container, Row} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {Link} from "gatsby";

const Footer = class extends React.Component {
  render() {
    return (
      <div className="footer">
        <Container fluid>
          <Row className="pt-2">
            <Col sm="8" lg="6" className="text-center">
              <Row>
                <Col>
                  <h5 className="text-white pt-3 pb-2">Links</h5>
                </Col>
              </Row>
              <Row className="pb-sm-2 small">
                <Col sm="4">
                  <Link className="nav-link text-white p-0" to="/">
                    Home
                  </Link>
                </Col>
                <Col sm="4">
                  <Link className="nav-link text-white p-0" to="/biography">
                    Biography
                  </Link>
                </Col>
                <Col sm="4">
                  <Link className="nav-link text-white p-0" to="/research">
                    Research
                  </Link>
                </Col>
              </Row>
              <Row className="pb-sm-2 small">
                <Col sm="4">
                  <Link className="nav-link text-white p-0" to="/publications">
                    Publications
                  </Link>
                </Col>
                <Col sm="4">
                  <Link className="nav-link text-white p-0" to="/infographics-and-maps">
                    Infographics and maps
                  </Link>
                </Col>
                <Col sm="4">
                  <Link className="nav-link text-white p-0" to="/teaching">
                    Teaching
                  </Link>
                </Col>
              </Row>
              <Row className="pb-sm-2 small">
                <Col sm="4">
                  <Link className="nav-link text-white p-0" to="/language-skills">
                    Language Skills
                  </Link>
                </Col>
                <Col sm="4">
                  <Link className="nav-link text-white p-0" to="/technical-skills">
                    Technical Skills
                  </Link>
                </Col>
                <Col sm="4">
                  <Link className="nav-link text-white p-0" to="/media">
                    Media
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col sm="4" lg="6" className="text-white text-center">
              <Row>
                <Col>
                  <h5 className="pt-3 pb-2">Contacts and Social Media</h5>
                </Col>
              </Row>
              <Row className="pb-2 small">
                <Col>
                  <FontAwesomeIcon icon={faEnvelope}/>{` Mail: `}
                  <a className="text-white" href="mailto:matteo.colombo1@unimi.it">matteo.colombo1@unimi.it</a>
                </Col>
              </Row>
              <Row className="pb-2 small">
                <Col>
                  <FontAwesomeIcon icon={faTwitter}/>{` Twitter: `}
                  <a className="text-white" href="https://twitter.com/philoteo" target="_blank" rel="noopener noreferrer">@philoteo</a>
                </Col>
              </Row>
              <Row className="pb-2 small">
                <Col>
                  <FontAwesomeIcon icon={faLinkedin}/>{` LinkedIn: `}
                  <a className="text-white" href="https://www.linkedin.com/in/matteo-colombo-21238130/" target="_blank" rel="noopener noreferrer">matteo-colombo</a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Footer
