import React from 'react'
import { Container } from 'semantic-ui-react'
import { css } from 'styled-components'
import BarChart from './BarChart'
import LineChart from './LineChart'
import Histogram from './Histogram'
import PieChart from './PieChart'

export default ({ barChartData, lineChartData, statsData }) => (
  <Container
    css={css`
      margin: 10px auto;
    `}
  >
    <BarChart data={barChartData} />
    <LineChart data={lineChartData} />
    <Histogram data={statsData} />
    <PieChart data={statsData} />
  </Container>
)
