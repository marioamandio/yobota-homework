import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import 'semantic-ui-css/semantic.min.css'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './sagas'

import App from './App'
import combineReducers from './reducers'

/* eslint-disable no-underscore-dangle */
// const reduxDevtoolCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const reduxDevtoolCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

/* eslint-enable no-underscore-dangle */

const composeEnhancers = reduxDevtoolCompose || compose

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
