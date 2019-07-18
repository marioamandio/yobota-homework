export const sortData = sortBy => ({
  type: SET_SORT_BY,
  payload: sortBy
})

export const toggleSortDirection = () => ({
  type: TOGGLE_SORT_DIRECTION
})

export const filterDataValues = query => ({
  type: FILTER_DATA_VALUES,
  payload: query
})

export const SET_SORT_BY = 'SET_SORT_BY'
export const FILTER_DATA_VALUES = 'FILTER_DATA_VALUES'
export const TOGGLE_SORT_DIRECTION = 'TOGGLE_SORT_DIRECTION'
