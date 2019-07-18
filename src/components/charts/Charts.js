import React from 'react'
import { Container } from 'semantic-ui-react'

import BarChart from './BarChart'
import LineChart from './LineChart'
import Histogram from './Histogram'
import PieChart from './PieChart'

export default ({ barChartData, lineChartData, histogramChartData }) => (
  <Container>
    <BarChart data={barChartData} />
    <LineChart data={lineChartData} />
    <Histogram data={histogramChartData} />
    <PieChart data={histogramChartData} />
  </Container>
)
