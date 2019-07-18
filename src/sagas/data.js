import { takeLatest, put, call } from 'redux-saga/effects'
import {
  FETCH_DATA_REQUEST,
  fetchDataSuccess,
  fetchDataFailure
} from '../actions/data'
import { rootQuery } from '../api'
function* fetchDataRequest() {
  try {
    const data = yield call(rootQuery)
    yield put(fetchDataSuccess(data.data))
  } catch (err) {
    yield put(fetchDataFailure(err))
  }
}

export const dataSagas = [takeLatest(FETCH_DATA_REQUEST, fetchDataRequest)]
