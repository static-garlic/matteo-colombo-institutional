import React from "react";
import PropTypes from "prop-types";
import {Col, Row} from "reactstrap";


export const SkillLevel = ({level, skillLevels}) => (
  <div className="SkillLevel">
    <Row>
      {
        skillLevels.map((skillLevel, index) =>
          <Col xs={{size: Math.floor(12/skillLevels.length), offset: 0}} md={{size: Math.min(Math.floor(12/skillLevels.length), 3), offset: 0}}>
            <Row>
              <Col className={`text-center small ${level > index ? "text-primary" : "text-secondary"}`}>
                {skillLevel}
              </Col>
            </Row>
            <Row>
              <Col>
                <svg style={{width: "100%", height: "15px"}}>
                  <rect width="100%" height="100%" className={`rect-border ${level > index ? "rect-fill" : ""}`}/>
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