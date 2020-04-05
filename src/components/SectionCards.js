import React from 'react'
import {Button, Card, CardBody, CardText, CardTitle, Col, Row} from "reactstrap";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import {Link} from "gatsby";

export const SectionCards = ({sectionCards}) => (
    <div className="SectionCards">
      <Row>
        {
          sectionCards.map(sectionCard =>
              <Col sm={Math.floor(12/sectionCards.length)} key={sectionCard.sectionTitle}>
                <Card>
                  <PreviewCompatibleImage imageInfo={sectionCard.sectionImage} />
                  <CardBody className="text-center">
                    <CardTitle className="text-primary">{sectionCard.sectionTitle}</CardTitle>
                    <CardText>{sectionCard.sectionDesc}</CardText>
                    <Link to={sectionCard.link} className="btn btn-primary" role="button">
                      Show more
                    </Link>
                  </CardBody>
                </Card>
              </Col>
          )
        }
      </Row>
    </div>
);

SectionCards.propTypes = {
  sectionCards: PropTypes.arrayOf(
      PropTypes.shape({
        sectionImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        sectionTitle: PropTypes.string,
        sectionDesc: PropTypes.string,
        link: PropTypes.string,
      })
  ),
};