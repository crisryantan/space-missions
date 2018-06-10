import React from 'react';
import PropTypes from 'prop-types';
import { Input, Select, Row, Col, Button } from 'antd';
import './SearchFilters.scss';
const Option = Select.Option;

// eslint-disable-next-line react/prefer-stateless-function
export default class SearchFilters extends React.PureComponent {
  render() {
    return (
      <Row className="search-filters" gutter={8}>
        <Col className="filter-wrapper" md={{ span: 5 }} xs={{ span: 24 }}>
          <div className="filter-title">Keywords</div>
          <Input className="filter" placeholder="eg Falcon" />
        </Col>
        <Col className="filter-wrapper" md={{ span: 5 }} xs={{ span: 24 }}>
          <div className="filter-title">Launch Pad</div>
          <Select className="filter" defaultValue="Any">
            {this.props.launchpads.map((launchpad) => (
              <Option key={launchpad.id}>{launchpad.full_name}</Option>
            ))}
          </Select>
        </Col>

        <Col className="filter-wrapper" md={{ span: 5 }} xs={{ span: 24 }}>
          <div className="filter-title">Min Year</div>
          <Select className="filter" defaultValue="Any">
            {this.props.availableYears.map((availableYears) => (
              <Option key={availableYears}>{availableYears}</Option>
            ))}
          </Select>
        </Col>

        <Col className="filter-wrapper" md={{ span: 5 }} xs={{ span: 24 }}>
          <div className="filter-title">Max Year</div>
          <Select className="filter" defaultValue="Any">
            {this.props.availableYears.map((availableYears) => (
              <Option key={availableYears}>{availableYears}</Option>
            ))}
          </Select>
        </Col>

        <Col md={{ span: 4 }} xs={{ span: 24 }}>
          <div className="apply-btn-div">&nbsp;</div>
          <Button className="apply-btn">Apply</Button>
        </Col>
      </Row>
    );
  }
}

SearchFilters.propTypes = {
  launchpads: PropTypes.array.isRequired,
  availableYears: PropTypes.array.isRequired,
};
