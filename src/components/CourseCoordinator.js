import React, {Fragment} from "react";
import PropTypes from "prop-types";

export const CourseCoordinator = ({courseCoordinator}) =>
  <div className="Teachings pb-4">
    <h3>{courseCoordinator.role}</h3>
    {courseCoordinator.courses.map(course =>
      <Fragment key={course.topic}>
        <h5 className="font-weight-bold pt-3 pb-1">{course.topic}</h5>
      </Fragment>
    )
    }
  </div>
;

CourseCoordinator.propTypes = {
  courseCoordinator: PropTypes.shape({
    role: PropTypes.string,
    courses: PropTypes.arrayOf(
      PropTypes.shape(
        {
          topic: PropTypes.string
        }
      )
    )
  })
};