import { connect } from 'react-redux'
import TableComponent from '../components/table/Table'
import {
  getTableData,
  getSortedBy,
  getFilterQuery,
  getSortDirection
} from '../selectors/table'
import { getDataFields } from '../selectors/data'
import {
  sortData as sortDataAction,
  filterDataValues,
  toggleSortDirection as toggleSortDirectionAction
} from '../actions/table'

const mapStateToProps = state => ({
  data: getTableData(state),
  dataFields: getDataFields(state.data),
  sortedBy: getSortedBy(state.table),
  filteredQuery: getFilterQuery(state.table),
  sortDirection: getSortDirection(state.table)
})

const mapDispatchToProps = dispatch => ({
  sortData: sortBy => dispatch(sortDataAction(sortBy)),
  filterValues: query => dispatch(filterDataValues(query)),
  toggleSortDirection: () => dispatch(toggleSortDirectionAction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableComponent)
