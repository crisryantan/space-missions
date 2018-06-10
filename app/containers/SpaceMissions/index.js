/*
 * SpaceMissions
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

// Imported components
import Header from 'components/Header';
import SearchFilters from 'containers/SearchFilters';

import { requestPageData } from './actions';
import reducer from './reducer';
import saga from './saga';
import {
  makeSelectLoading,
  makeSelectLaunches,
  makeSelectLaunchPads,
  makeSelectAvailableYears,
} from './selectors';
import './SpaceMissions.scss';

// eslint-disable-next-line react/prefer-stateless-function
export class SpaceMissions extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        keywords: '',
        launchPad: 'Any',
        minYear: 'Any',
        maxYear: 'Any',
      },
    };
  }

  componentWillMount() {
    this.props.requestData();
  }

  applyFilters = (filters) => {
    this.setState({ filters });
  };

  render() {
    const { launchpads, availableYears } = this.props;
    const { filters } = this.state;

    return (
      <div>
        <Header />
        <div className="wrapper">
          <SearchFilters
            filters={filters}
            launchpads={launchpads}
            availableYears={availableYears}
            applyFilters={this.applyFilters}
          />
          <div> Search Results component here..</div>
        </div>
      </div>
    );
  }
}

SpaceMissions.propTypes = {
  requestData: PropTypes.func.isRequired,
  launchpads: PropTypes.array.isRequired,
  availableYears: PropTypes.array.isRequired,
};

export function mapDispatchToProps(dispatch) {
  return {
    requestData: () => dispatch(requestPageData()),
  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  launches: makeSelectLaunches(),
  launchpads: makeSelectLaunchPads(),
  availableYears: makeSelectAvailableYears(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const withReducer = injectReducer({ key: 'spacemissions', reducer });
const withSaga = injectSaga({ key: 'spacemissions', saga });

export default compose(
  withReducer,
  withConnect,
  withSaga
)(SpaceMissions);
