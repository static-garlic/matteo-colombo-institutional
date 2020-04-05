import React from "react";
import PropTypes from "prop-types";
import {Col, Row} from "reactstrap";
import {SkillLevel} from "./SkillLevel";

export const Skill = ({skill, skillLevels, skillNameColSize}) => {

    return (
      <div className="Skill">
        <Row className="pb-4">
          <Col xs={skillNameColSize || "4"} className="align-self-end">
            <h4 className="mb-0">{skill.skillName}</h4>
          </Col>
          <Col xs={skillNameColSize ? 12 - skillNameColSize : 8}>
            <SkillLevel level={skill.level} skillLevels={skillLevels} />
          </Col>
        </Row>
      </div>
    )
  }
;

Skill.propTypes = {
  skill: PropTypes.shape({
      skillName: PropTypes.string,
      level: PropTypes.number,
      skillNameColSize: PropTypes.string
    }
  ),
  skillLevels: PropTypes.arrayOf(
    PropTypes.string
  )
};