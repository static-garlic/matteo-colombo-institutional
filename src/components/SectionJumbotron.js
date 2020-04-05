import React from 'react'
import {Col, Container, Jumbotron, Row} from "reactstrap";
import PropTypes from "prop-types";

export const SectionJumbotron = ({title}) => (
  <div className="SectionJumbotron">
    <Jumbotron fluid />
    <Container>
      <Row>
        <Col sm="auto">
          <h1 className="pb-4 text-primary">
            {title}
          </h1>
        </Col>
      </Row>
    </Container>
  </div>
);

SectionJumbotron.propTypes = {
  title: PropTypes.string
};