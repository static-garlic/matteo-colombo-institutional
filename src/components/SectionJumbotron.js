import React from 'react'
import {Col, Jumbotron, Row} from "reactstrap";
import PropTypes from "prop-types";

export const SectionJumbotron = ({title}) => (
    <div className="SectionJumbotron">
      <Jumbotron
          fluid style={{
        background: 'url(/img/section-jumbotron.png) no-repeat center center',
        height: "10rem",
        backgroundSize: "cover"
      }}
      >
      </Jumbotron>
      <Row>
        <Col sm={{size: "auto", offset: 1}}>
          <h1 className="p-2 pb-4 text-primary">
            {title}
          </h1>
        </Col>
      </Row>
    </div>
);

SectionJumbotron.propTypes = {
  title: PropTypes.string
};