import { call, put, takeLatest } from 'redux-saga/effects';
import moment from 'moment';
import { getRequest } from 'utils/request';

import { REQUEST_DATA } from './constants';
import { requestPageDataSuccess, requestPageDataError } from './actions';

export function* requestPageData() {
  try {
    const { data: launches } = yield call(getRequest, '/launches');
    const { data: launchpads } = yield call(getRequest, '/launchpads');
    launchpads.unshift({ id: 'Any', full_name: 'Any' });

    // Min/Max year select box, values are populated by all available years in launch data
    const availableYears = launches
      .map(({ launch_date_local }) => moment(launch_date_local).format('YYYY'))
      .filter((date, index, a) => a.indexOf(date) === index);
    availableYears.unshift('Any');

    yield put(requestPageDataSuccess(launches, launchpads, availableYears));
  } catch (error) {
    yield put(requestPageDataError(error));
  }
}

export default function* appFlowSaga() {
  yield takeLatest(REQUEST_DATA, requestPageData);
}
