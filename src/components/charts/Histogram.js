import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  ResponsiveContainer
} from 'recharts'
import {
  CustomTooltip,
  StyledChartsDescription,
  StyledChartsWrapper
} from './chartsUtils'
import { formatNumber } from '../utils'
import { WIDTH, HEIGHT, MARGIN } from './chartsGlobals'

const CustomizedXAxisTick = ({ x, y, payload }) => (
  <g transform={`translate(${x + WIDTH / 12},${y - 4})`}>
    <text x={0} y={0} dy={16} textAnchor='start' fill='#666'>
      {payload.value}
    </text>
  </g>
)

export default ({ data }) => {
  console.log(data)
  return (
    <StyledChartsWrapper>
      <StyledChartsDescription>
        Distribution of records by years of Experience where age, salary and
        years of experience are provided
      </StyledChartsDescription>
      <ResponsiveContainer width={'100%'} height={HEIGHT}>
        <BarChart
          width={WIDTH}
          height={HEIGHT}
          data={data.records}
          barCategoryGap={0}
          margin={MARGIN}
        >
          <CartesianGrid strokeDasharray='2 2' />
          <XAxis
            dataKey='maxBinExperience'
            type='category'
            tick={<CustomizedXAxisTick />}
            tickSize={0}
          >
            <Label value={'years of experience'} position='insideBottom' />
          </XAxis>

          <YAxis tickFormatter={f => formatNumber(f)}>
            <Label
              value={'% of records by experience'}
              angle={-90}
              position='insideBottomLeft'
            />
          </YAxis>
          <Tooltip content={<CustomTooltip />} />

          <Bar dataKey='percentageOfRecords' fill='#8884d8' />
        </BarChart>
      </ResponsiveContainer>
    </StyledChartsWrapper>
  )
}
