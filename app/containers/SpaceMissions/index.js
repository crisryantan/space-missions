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
import './SpaceMissions.scss';

import { requestPageData } from './actions';
import reducer from './reducer';
import saga from './saga';
import {
  makeSelectLoading,
  makeSelectLaunches,
  makeSelectLaunchPads,
} from './selectors';

// eslint-disable-next-line react/prefer-stateless-function
export class SpaceMissions extends React.PureComponent {
  componentWillMount() {
    this.props.requestData();
  }

  render() {
    return (
      <h1>
        <div>Header component here..</div>
        <div className="wrapper">
          <div>Search Filters component here..</div>
          <div> Search Results component here..</div>
        </div>
      </h1>
    );
  }
}

SpaceMissions.propTypes = {
  requestData: PropTypes.func.isRequired,
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
