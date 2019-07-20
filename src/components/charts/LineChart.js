import React from 'react'
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  Brush
} from 'recharts'

import { formatNumber, formatString } from '../utils'
import { WIDTH, HEIGHT, MARGIN } from './chartsGlobals'
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
        <>
          <TooltipParagraph label={`Date of Birth`} value={label} />
          <TooltipParagraph
            label={formatString(payload[0].dataKey)}
            value={payload[0].value}
          />

          <TooltipParagraph
            label={formatString(payload[1].dataKey)}
            value={formatNumber(payload[1].value)}
          />
        </>
      </StyledTootip>
    )
  }

  return null
}

export default ({ data }) => {
  return (
    <StyledChartsWrapper>
      <StyledChartsDescription>
        relationship between age / years of experience and salary for all the
        values that contain all of these fields
      </StyledChartsDescription>
      <ResponsiveContainer width='100%' height={HEIGHT}>
        <LineChart
          width={WIDTH}
          height={HEIGHT}
          data={data}
          margin={MARGIN}
          stackOffset='expand'
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date_of_birth' interval='preserveEnd' />
          <YAxis
            dataKey='years_of_experience'
            orientation='left'
            yAxisId='y'
            stroke='#82ca9d'
          />
          <YAxis
            dataKey='salary'
            orientation='right'
            yAxisId='s'
            stroke='#8884d8'
            tickFormatter={f => formatNumber(f)}
          />

          <Tooltip content={CustomTooltip} />
          <Legend
            verticalAlign='top'
            formatter={value => formatString(value)}
          />
          <Line
            type='monotone'
            dataKey='years_of_experience'
            stroke='#82ca9d'
            yAxisId='y'
            dot={false}
          />
          <Line
            type='monotone'
            dataKey='salary'
            stroke='#8884d8'
            yAxisId='s'
            dot={false}
          />

          <Brush height={30} stroke='#000000' y={HEIGHT - 30}>
            <LineChart>
              <Line
                type='monotone'
                dataKey='years_of_experience'
                stroke='#82ca9d'
                yAxisId='y'
                dot={false}
              />
              <Line
                type='monotone'
                dataKey='salary'
                stroke='#8884d8'
                yAxisId='s'
                dot={false}
              />
            </LineChart>
          </Brush>
        </LineChart>
      </ResponsiveContainer>
    </StyledChartsWrapper>
  )
}

// <YAxis label={{ value: 'Index', angle: -90, position: 'insideLeft' }} />
