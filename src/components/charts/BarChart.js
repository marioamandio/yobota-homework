import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts'
import { Header } from 'semantic-ui-react'
import { WIDTH, HEIGHT, MARGIN } from './chartsGlobals'
import { StyledTootip, TooltipParagraph } from './chartsUtils'

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
  <div>
    <Header as='h3' textAlign='left'>
      Bar chart representing the amount of missing fields by whole set of data
      provided
    </Header>
    <BarChart width={WIDTH} height={HEIGHT} margin={MARGIN} data={data}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='key' />
      <YAxis />
      <Tooltip content={CustomTooltip} />
      <Bar dataKey='value' fill='#8884d8' />
    </BarChart>
  </div>
)
