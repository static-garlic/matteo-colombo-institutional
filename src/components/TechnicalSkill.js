import React from "react";
import PropTypes from "prop-types";
import {Col, Row} from "reactstrap";
import {SkillLevel} from "./SkillLevel";

export const TechnicalSkill = ({technicalSkill}) => {
    const technicalSkillLevels = [
      "Beginner",
      "Intermediate",
      "Advanced"
    ];

    return (
      <div className="TechnicalSkill">
        <Row className="pb-4">
          <Col sm="4" className="align-self-end">
            <h4 className="mb-0">{technicalSkill.skillName}</h4>
          </Col>
          <Col sm="8">
            <SkillLevel level={technicalSkill.level} skillLevels={technicalSkillLevels} />
          </Col>
        </Row>
      </div>
    )
  }
;

TechnicalSkill.propTypes = {
  technicalSkill: PropTypes.shape({
      skillName: PropTypes.string,
      level: PropTypes.number
    }
  )
};