import { call, put, takeLatest } from 'redux-saga/effects';
import { getRequest } from 'utils/request';

import { REQUEST_DATA } from './constants';
import { requestPageDataSuccess, requestPageDataError } from './actions';

export function* requestPageData() {
  try {
    const { data: launches } = yield call(getRequest, '/launches');
    const { data: launchpads } = yield call(getRequest, '/launchpads');

    yield put(requestPageDataSuccess(launches, launchpads));
  } catch (error) {
    yield put(requestPageDataError(error));
  }
}

export default function* appFlowSaga() {
  yield takeLatest(REQUEST_DATA, requestPageData);
}
