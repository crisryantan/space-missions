import { createSelector } from 'reselect';

/**
 * Direct selector to the homepage state domain
 */
const selectHomepage = (state) => state.get('homepage');

const makeSelectLoading = () =>
  createSelector(selectHomepage, (substate) => substate.get('loading'));

const makeSelectLaunches = () =>
  createSelector(selectHomepage, (substate) => substate.get('launches').toJS());

const makeSelectLaunchPads = () =>
  createSelector(selectHomepage, (substate) => substate.get('launchpads').toJS());

export {
  selectHomepage,
  makeSelectLoading,
  makeSelectLaunches,
  makeSelectLaunchPads,
};
