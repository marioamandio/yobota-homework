import {
  SET_SORT_BY,
  FILTER_DATA_VALUES,
  TOGGLE_SORT_DIRECTION
} from '../actions/table'

const initialState = {
  sortBy: 'id',
  sortDirection: 'ASC',
  filter: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_BY: {
      let sortDirection = state.sortDirection
      if (action.payload === state.sortBy) {
        if (sortDirection === 'ASC') {
          sortDirection = 'DESC'
        } else {
          sortDirection = 'ASC'
        }
      }
      return { ...state, sortBy: action.payload, sortDirection }
    }

    case FILTER_DATA_VALUES: {
      return { ...state, filter: action.payload }
    }

    case TOGGLE_SORT_DIRECTION: {
      let sortDirection
      if (state.sortDirection === 'ASC') {
        sortDirection = 'DESC'
      } else {
        sortDirection = 'ASC'
      }

      return { ...state, sortDirection }
    }

    default:
      return state
  }
}
