import { connect } from 'react-redux'
import ChartsComponent from '../components/charts/Charts'
import {
  getBarChartData,
  getLineChartData,
  getHistogramChartData
} from '../selectors/charts'

const mapStateToProps = state => ({
  lineChartData: getLineChartData(state.data),
  barChartData: getBarChartData(state.data),
  histogramChartData: getHistogramChartData(state.data)
})

export default connect(mapStateToProps)(ChartsComponent)
