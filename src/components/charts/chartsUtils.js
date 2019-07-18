import React from 'react'
import styled from 'styled-components'

import { formatNumber } from '../utils'

export const StyledTootip = styled.div`
  background: #efefef;
  padding: 10px;
  border-radius: 3px;

  .label {
    font-weight: 650;
  }
`

export const TooltipParagraph = ({ label, value }) => (
  <p>
    <span className='label'>{label}</span>: {value}
  </p>
)

export const CustomTooltip = props => {
  if (props.active) {
    return (
      <StyledTootip>
        <TooltipParagraph
          label={`${props.payload[0].payload.minBinExperience}-${
            props.payload[0].payload.maxBinExperience
          } year${props.payload[0].payload.maxBinExperience === 1 ? '' : 's'}`}
          value={`${formatNumber(
            props.payload[0].payload.percentageOfRecords * 100
          )}%`}
        />
        <TooltipParagraph
          label={`Mean Salary`}
          value={formatNumber(props.payload[0].payload.meanSalary)}
        />

        <TooltipParagraph
          label={`Number of Records`}
          value={props.payload[0].payload.numOfRecords}
        />
      </StyledTootip>
    )
  }

  return null
}
