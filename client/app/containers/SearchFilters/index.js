import React from 'react';
import PropTypes from 'prop-types';
import { Input, Select, Row, Col, Button, message } from 'antd';
import './SearchFilters.scss';
const Option = Select.Option;

// eslint-disable-next-line react/prefer-stateless-function
export default class SearchFilters extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filters: this.props.filters,
    };
  }

  handleFilterChange = (filter, val) => {
    this.setState({
      filters: {
        ...this.state.filters,
        [filter]: val,
      },
    });
  };

  validateFields = (filters) => {
    const { applyFilters } = this.props;
    const { minYear, maxYear } = filters;

    if (
      (minYear !== 'Any' && maxYear === 'Any') ||
      (minYear === 'Any' && maxYear !== 'Any') ||
      (minYear > maxYear || maxYear < minYear)
    ) {
      return message.error('Invalid year range');
    }

    return applyFilters(filters);
  };

  render() {
    return (
      <Row className="search-filters" gutter={8}>
        <Col className="filter-wrapper" md={{ span: 5 }} xs={{ span: 24 }}>
          <div className="filter-title">Keywords</div>
          <Input
            className="filter"
            placeholder="eg Falcon"
            onChange={(e) => this.handleFilterChange('keywords', e.target.value)}
          />
        </Col>
        <Col className="filter-wrapper" md={{ span: 5 }} xs={{ span: 24 }}>
          <div className="filter-title">Launch Pad</div>
          <Select
            className="filter"
            defaultValue="Any"
            onChange={(val) => this.handleFilterChange('launchPad', val)}
          >
            {this.props.launchpads.map((launchpad) => (
              <Option key={launchpad.id}>{launchpad.full_name}</Option>
            ))}
          </Select>
        </Col>

        <Col className="filter-wrapper" md={{ span: 5 }} xs={{ span: 24 }}>
          <div className="filter-title">Min Year</div>
          <Select
            className="filter"
            defaultValue="Any"
            onChange={(val) => this.handleFilterChange('minYear', val)}
          >
            {this.props.availableYears.map((availableYears) => (
              <Option key={availableYears}>{availableYears}</Option>
            ))}
          </Select>
        </Col>

        <Col className="filter-wrapper" md={{ span: 5 }} xs={{ span: 24 }}>
          <div className="filter-title">Max Year</div>
          <Select
            className="filter"
            defaultValue="Any"
            onChange={(val) => this.handleFilterChange('maxYear', val)}
          >
            {this.props.availableYears.map((availableYears) => (
              <Option key={availableYears}>{availableYears}</Option>
            ))}
          </Select>
        </Col>

        <Col md={{ span: 4 }} xs={{ span: 24 }}>
          <div className="apply-btn-div">&nbsp;</div>
          <Button
            className="apply-btn"
            onClick={() => this.validateFields(this.state.filters)}
          >
            Apply
          </Button>
        </Col>
      </Row>
    );
  }
}

SearchFilters.propTypes = {
  applyFilters: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
  launchpads: PropTypes.array.isRequired,
  availableYears: PropTypes.array.isRequired,
};
