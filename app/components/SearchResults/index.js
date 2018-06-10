/* eslint-disable camelcase, jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Button, Row, Col, Spin } from 'antd';
import './SearchResults.scss';

const BtnDisplayNames = {
  mission_patch: 'Mission Patch',
  reddit_campaign: 'Reddit Campaign',
  reddit_launch: 'Reddit Launch',
  reddit_recovery: 'Reddit Recovery',
  reddit_media: 'Reddit Media',
  presskit: 'Press',
  article_link: 'Article',
  video_link: 'Watch Video',
};

const Result = ({ launch }) => {
  const {
    flight_number,
    launch_date_local,
    rocket,
    links,
    payloads,
    launch_site,
  } = launch;

  const linksKeys = Object.keys(links).filter((e) => e !== 'mission_patch');
  return (
    <Row className="result" gutter={8}>
      <Col className="mission-image" md={{ span: 4 }} xs={{ span: 6 }}>
        <img src={links.mission_patch} alt="" />
      </Col>
      <Col className="mission-details" md={{ span: 16 }} xs={{ span: 18 }}>
        <div className="rocket-name">
          {rocket.rocket_name} - {payloads[0].payload_id}
        </div>
        <span className="launch-date">
          {moment(launch_date_local).format('Do MMMM YYYY')} at{' '}
          {moment(launch_date_local).format('h:mm:ss a')} from{' '}
          {launch_site.site_name}
        </span>
        <div className="link-btn-group">
          {linksKeys.map((linkKey) => (
            <Button href={links[linkKey]} className="link-btn" key={linkKey}>
              {BtnDisplayNames[linkKey]}
            </Button>
          ))}
        </div>
      </Col>
      <Col className="flight-number" md={{ span: 4 }} xs={{ span: 24 }}>
        <div className="flight-number-web">
          <div>#{flight_number}</div>
          <span className="flight-number-text">Flight Number</span>
        </div>
        <div className="flight-number-mobile">
          <span className="flight-number-text">
            Flight Number: #{flight_number}
          </span>
        </div>
      </Col>
    </Row>
  );
};

Result.propTypes = {
  launch: PropTypes.object.isRequired,
};

// eslint-disable-next-line react/prefer-stateless-function
const SearchResults = ({ launches, loading }) => (
  <div className="search-results" id="search-results">
    {loading ? (
      <div className="loading-view">
        <Spin size="large" />
      </div>
    ) : (
      <div>
        {' '}
        <div className="search-count">Showing {launches.length} Missions</div>
        {launches.map((launch) => (
          <Result launch={launch} key={launch.flight_number} />
        ))}
      </div>
    )}
  </div>
);

SearchResults.propTypes = {
  loading: PropTypes.bool.isRequired,
  launches: PropTypes.array.isRequired,
};

export default SearchResults;
