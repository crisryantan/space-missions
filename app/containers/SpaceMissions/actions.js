import {
  REQUEST_DATA,
  REQUEST_DATA_SUCCESS,
  REQUEST_DATA_ERROR,
} from './constants';

export function requestPageData() {
  return {
    type: REQUEST_DATA,
  };
}

export function requestPageDataSuccess(launches, launchpads) {
  return {
    type: REQUEST_DATA_SUCCESS,
    launches,
    launchpads,
  };
}

export function requestPageDataError(error) {
  return {
    type: REQUEST_DATA_ERROR,
    error,
  };
}
