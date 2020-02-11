import React from 'react'
import {Col, Jumbotron, Row} from "reactstrap";
import PropTypes from "prop-types";

export const SectionJumbotron = ({title}) => (
    <div className="SectionJumbotron">
      <Jumbotron
          fluid style={{
        background: 'url(/img/section-jumbotron.jpg) no-repeat center center',
        height: "10rem",
        backgroundSize: "cover",
      }}
      >
        <Row>
          <Col sm={{size: "auto", offset: 1}}>
            <h1 className="p-2 text-primary">
              {title}
            </h1>
          </Col>
        </Row>
      </Jumbotron>
    </div>
);

SectionJumbotron.propTypes = {
  title: PropTypes.string
};