import React, { Component } from 'react'
import { Input, Icon, Menu, Select, Label } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledMenu = styled(Menu)`
  &&& {
    margin-top: 20px;
    & .menu:first-child {
      margin-top: 20px;
    }
  }
`

export default class TableHeader extends Component {
  state = {
    suggestions: [],
    inputValue: ''
  }

  setSuggestions = () => {
    const { filteredQuery, data, dataFields } = this.props
    let i = 0
    const regex = new RegExp(`^${filteredQuery}`, 'i')
    const suggestions = []

    while (suggestions.length < 6 && i < data.length) {
      const record = data[i]

      dataFields.forEach(field => {
        if (field !== 'id') {
          const isValidSuggestion = regex.test(record[field])

          if (
            isValidSuggestion &&
            !suggestions.includes(record[field]) &&
            suggestions.length < 6
          ) {
            suggestions.push(record[field])
          }
        }
      })
      i++
    }
    this.setState(() => ({
      suggestions: suggestions,
      inputValue: this.props.filteredQuery
    }))
  }

  suggestionSelected(value) {
    this.setState(() => ({
      suggestions: []
    }))

    this.props.filterValues(value)
  }

  renderSuggestions = () => {
    const { suggestions } = this.state
    if (suggestions.length === 0) {
      return null
    }
    return (
      <ul>
        {suggestions.map((item, i) => (
          <option key={i} value={item} />
        ))}
      </ul>
    )
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.filteredQuery !== this.props.filteredQuery &&
      this.props.data.length > 1 &&
      this.props.filteredQuery.length > 0
    ) {
      this.setSuggestions()
    }

    if (this.props.filteredQuery === '' && this.state.inputValue !== '') {
      this.setState({ suggestions: [], inputValue: '' })
    }
  }

  onTextChanged = value => {
    this.props.filterValues(value)
  }

  renderDataFieldsOptions = () => {
    const options = this.props.dataFields.map(field => ({
      key: field,
      value: field,
      text: field,
      onClick: () => {
        this.props.sortData(field)
      }
    }))

    return options
  }

  renderSortDirectionOptions = options => {
    return options.map(opt => ({
      key: opt,
      value: opt,
      text: opt,
      onClick: () => {
        this.props.toggleSortDirection()
      }
    }))
  }

  render() {
    const { sortedBy, dataFields, sortDirection } = this.props
    const sortDirectionOptions = ['ascendent', 'descendent']
    return (
      <StyledMenu>
        <Menu.Item>
          <Input list='suggestions' icon placeholder='filter...'>
            <Icon name='filter' />
            <input
              value={this.state.inputValue}
              onChange={ev => this.onTextChanged(ev.target.value)}
            />
            <datalist id='suggestions'>{this.renderSuggestions()}</datalist>
          </Input>
        </Menu.Item>
        <Menu.Item>
          <Label as='a' basic size='huge' color='blue'>
            Sort by:
          </Label>
          <Select
            value={sortedBy}
            options={dataFields ? this.renderDataFieldsOptions() : []}
          />
        </Menu.Item>
        <Menu.Item>
          <Label as='a' basic size='huge' color='blue'>
            Sort Direction:
          </Label>
          <Select
            value={
              sortDirection === 'ASC'
                ? sortDirectionOptions[0]
                : sortDirectionOptions[1]
            }
            options={this.renderSortDirectionOptions(sortDirectionOptions)}
          />
        </Menu.Item>
      </StyledMenu>
    )
  }
}
