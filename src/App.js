import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'

import { getDataError, getDataLoading } from './selectors/data'
import { fetchDataRequest } from './actions/data'
import Table from './containers/Table'
import Charts from './containers/Charts'
import Loader from './components/Loader'

const AppWrapper = styled.div`
  padding: 15px;
`

const Header = styled.div`
  height: 55px;
  display: flex;
  justify-content: center;
`

const App = ({ requestData, error, loading }) => {
  const [renderedComponent, setRenderedComponent] = useState('table')

  useEffect(() => {
    requestData()
  }, [])

  return (
    <AppWrapper>
      <Header>
        <Button
          primary
          size='huge'
          name='table'
          disabled={renderedComponent === 'table' ? true : false}
          onClick={ev => setRenderedComponent(ev.target.name)}
        >
          Table
        </Button>
        <Button
          primary
          size='huge'
          name='charts'
          disabled={renderedComponent === 'charts' ? true : false}
          onClick={ev => setRenderedComponent(ev.target.name)}
        >
          Charts
        </Button>
      </Header>
      {error && <p>something went wrong!</p>}

      {!error && loading && <Loader />}
      {!error && !loading && renderedComponent === 'table' ? (
        <Table />
      ) : (
        <Charts />
      )}
    </AppWrapper>
  )
}

const mapStateToProps = state => ({
  error: getDataError(state.data),
  loading: getDataLoading(state.data)
})

const mapDispatchToProps = dispatch => ({
  requestData: () => dispatch(fetchDataRequest())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
