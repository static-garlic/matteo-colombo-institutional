import React from "react";
import PropTypes from "prop-types";
import {Col, Row} from "reactstrap";


export const SkillLevel = ({level, skillLevels}) => (
  <div className="SkillLevel">
    <Row>
      {
        skillLevels.map((skillLevel, index) =>
          <Col sm="auto">
            <Row>
              <Col className={`text-center small ${level > index ? "text-primary" : "text-secondary"}`}>
                {skillLevel}
              </Col>
            </Row>
            <Row>
              <Col>
                <svg width="100" height="15">
                  <rect width="100" height="15" className={`rect-border ${level > index ? "rect-fill" : ""}`}/>
                </svg>
              </Col>
            </Row>
          </Col>
        )
      }
    </Row>
  </div>
);

SkillLevel.propTypes = {
  level: PropTypes.number,
  skillLevel: PropTypes.arrayOf(
    PropTypes.string
  )
};