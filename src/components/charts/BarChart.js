import React from 'react'
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar
} from 'recharts'
import { HEIGHT, MARGIN } from './chartsGlobals'
import {
  StyledTootip,
  TooltipParagraph,
  StyledChartsDescription,
  StyledChartsWrapper
} from './chartsUtils'

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <StyledTootip>
        <TooltipParagraph label={label} value={payload[0].value} />
      </StyledTootip>
    )
  }

  return null
}

export default ({ data }) => (
  <StyledChartsWrapper>
    <StyledChartsDescription>
      Bar chart representing the amount of missing fields for the whole set of
      data provided
    </StyledChartsDescription>
    <ResponsiveContainer width='100%' height={HEIGHT}>
      <BarChart margin={MARGIN} data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='key' />
        <YAxis />
        <Tooltip content={CustomTooltip} />
        <Bar dataKey='value' fill='#8884d8' />
      </BarChart>
    </ResponsiveContainer>
  </StyledChartsWrapper>
)
