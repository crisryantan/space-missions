/*
 *
 * Homepage reducer
 *
 */

import { fromJS } from 'immutable';

const initialState = fromJS({
  launches: [],
  launchpads: [],
  loading: false,
});

function homepageReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default homepageReducer;
