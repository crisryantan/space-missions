import { createSelector } from 'reselect';

/**
 * Direct selector to the spacemissions state domain
 */
const selectSpaceMissions = (state) => state.get('spacemissions');

const makeSelectLoading = () =>
  createSelector(selectSpaceMissions, (substate) => substate.get('loading'));

const makeSelectLaunches = () =>
  createSelector(selectSpaceMissions, (substate) =>
    substate.get('launches').toJS()
  );

const makeSelectLaunchPads = () =>
  createSelector(selectSpaceMissions, (substate) =>
    substate.get('launchpads').toJS()
  );

const makeSelectAvailableYears = () =>
  createSelector(selectSpaceMissions, (substate) =>
    substate.get('availableYears').toJS()
  );

export {
  selectSpaceMissions,
  makeSelectLoading,
  makeSelectLaunches,
  makeSelectLaunchPads,
  makeSelectAvailableYears,
};
