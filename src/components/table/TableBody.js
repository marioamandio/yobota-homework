import React from 'react'
import { Table, AutoSizer, Column } from 'react-virtualized'
import { Icon } from 'semantic-ui-react'

import { formatString, formatNumber } from '../utils'

export default ({ data, dataFields, sortedBy, sortData, sortDirection }) => {
  const cellRenderer = args => {
    let value = args.cellData
    if (!value || value === 'n/a') {
      value = null
    }
    if (args.dataKey === 'salary') {
      if (typeof value === 'number') {
        value = formatNumber(value)
      }
    }
    return <div>{value}</div>
  }

  const headerRenderer = ({ label, dataKey }) => (
    <div>
      {formatString(label)}
      {dataKey === sortedBy && (
        <Icon name={`angle ${sortDirection === 'ASC' ? 'up' : 'down'}`} />
      )}
    </div>
  )

  if (data && dataFields) {
    return (
      <AutoSizer disableHeight>
        {({ width }) => (
          <Table
            {
              // Force update
              ...data
            }
            width={1400}
            height={570}
            headerHeight={30}
            rowHeight={30}
            rowCount={data.length}
            rowStyle={index => {
              return {
                background: `${index % 2 === 0 ? '#ededfd' : '#fff'}`
              }
            }}
            overscanRowCount={20}
            rowGetter={({ index }) => data[index]}
            onHeaderClick={({ dataKey }) => sortData(dataKey)}
          >
            {dataFields
              .filter(field => field !== 'id')
              .map((field, i) => (
                <Column
                  key={i}
                  width={width / dataFields.length}
                  label={formatString(field)}
                  cellRenderer={cellRenderer}
                  headerRenderer={headerRenderer}
                  dataKey={field}
                  style={{ textAlign: 'center' }}
                  headerStyle={{ textAlign: 'center' }}
                />
              ))}
          </Table>
        )}
      </AutoSizer>
    )
  }
  return null
}
