import React, {Fragment} from "react";
import PropTypes from "prop-types";

export const Instructor = ({instructor}) =>
  <div className="Teachings pb-4">
    <h3>{instructor.role}</h3>
    {instructor.teachings.map(teachingTopic =>
      <Fragment key={teachingTopic.topic}>
        <h5 className="font-weight-bold pt-3 pb-1">{teachingTopic.topic}</h5>
        {
          teachingTopic.lectures.map(lecture =>
            <p key={lecture.title}>
              <span>{lecture.title}, </span>
              <span className="font-italic">{lecture.course}, {lecture.university}, {lecture.year} </span>
              {
                lecture.studentsEvaluationsFile ? (
                  <p>{`Download students evaluations `}
                    <a  target="_blank" rel="noopener noreferrer" href={`${lecture.studentsEvaluationsFile}`}>here</a>
                  </p>
                ) : null
              }
            </p>
          )
        }
      </Fragment>
    )
    }
  </div>
;

Instructor.propTypes = {
  instructor: PropTypes.shape({
    role: PropTypes.string,
    teachings: PropTypes.arrayOf(
      PropTypes.shape(
        {
          topic: PropTypes.string,
          lectures: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                course: PropTypes.string,
                university: PropTypes.string,
                year: PropTypes.string,
                studentsEvaluationsFile: PropTypes.object
            }
            )
          )
        }
      )
    )
  })
};