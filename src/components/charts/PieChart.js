import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts'

import {
  CustomTooltip,
  StyledChartsDescription,
  StyledChartsWrapper
} from './chartsUtils'
import { HEIGHT, MARGIN } from './chartsGlobals'

const COLORS = [
  '#1b9e77',
  '#d95f02',
  '#7570b3',
  '#e7298a',
  '#66a61e',
  '#e6ab02',
  '#a6761d',
  '#666666'
]

export default ({ data }) => (
  <StyledChartsWrapper>
    <StyledChartsDescription>
      Distribution of records by years of Experience where age, salary and years
      of experience are provided
    </StyledChartsDescription>
    <ResponsiveContainer width={'100%'} height={HEIGHT}>
      <PieChart margin={MARGIN}>
        <Pie
          data={data.records}
          cx='50%'
          cy='50%'
          outerRadius={80}
          label
          fill='#8884d8'
          dataKey='numOfRecords'
        >
          {data.records.map((entry, index) => {
            return (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            )
          })}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  </StyledChartsWrapper>
)
