import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_REQUEST,
  FETCH_DATA_FAILURE
} from '../actions/data'

const initialState = {
  data: [],
  error: null,
  fetching: false
}

const data = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS: {
      return { ...state, fetching: false, error: null, data: action.payload }
    }

    case FETCH_DATA_REQUEST: {
      return { ...state, fetching: true, error: null }
    }

    case FETCH_DATA_FAILURE: {
      return { ...state, fetching: false, error: action.error }
    }

    default:
      return state
  }
}

export default data
