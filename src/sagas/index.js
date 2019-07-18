import { all } from 'redux-saga/effects'

import { dataSagas } from './data'

export function* rootSaga() {
  yield all([...dataSagas])
}
