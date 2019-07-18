import React from 'react'
import styled from 'styled-components'
import 'react-virtualized/styles.css'

import TableBody from './TableBody'
import TableHeader from './TableHeader'

const TableWrapper = styled.div``

export default ({
  data,
  dataFields,
  sortedBy,
  sortData,
  filterValues,
  filteredQuery,
  sortDirection,
  toggleSortDirection
}) => {
  if (data && dataFields) {
    return (
      <TableWrapper>
        <TableHeader
          data={data}
          filterValues={filterValues}
          sortedBy={sortedBy}
          filteredQuery={filteredQuery}
          toggleSortDirection={toggleSortDirection}
          dataFields={dataFields}
          sortData={sortData}
          sortDirection={sortDirection}
        />
        <TableBody
          data={data}
          dataFields={dataFields}
          sortData={sortData}
          sortDirection={sortDirection}
          sortedBy={sortedBy}
        />
      </TableWrapper>
    )
  }
  return null
}
