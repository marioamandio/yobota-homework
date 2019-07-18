import moment from 'moment'

export const getTableData = ({
  data,
  table: { sortBy, sortDirection, filter }
}) => {
  const filterField = field =>
    field.toLowerCase().includes(filter.toLowerCase())

  const mutatedData = data.data.filter(d => {
    const firstName = d.first_name ? filterField(d.first_name) : false
    const lastName = d.last_name ? filterField(d.last_name) : false
    const email = d.email ? filterField(d.email) : false
    const industry = d.industry ? filterField(d.industry) : false
    const dateOfBirth = d.date_of_birth ? filterField(d.date_of_birth) : false

    return firstName || lastName || email || industry || dateOfBirth
  })

  // get sorting direction
  const sortDirectionEnum = sortDirection === 'ASC' ? [-1, 1] : [1, -1]
  if (sortBy === 'date_of_birth') {
    return mutatedData.sort((a, b) =>
      moment(a.date_of_birth, 'DD/MM/YYYY').valueOf() <
      moment(b.date_of_birth, 'DD/MM/YYYY').valueOf()
        ? sortDirectionEnum[0]
        : sortDirectionEnum[1]
    )
  }

  // This seems a little bit odd, but it was the only way that I could handle properly the differents orderBy scenarios
  const sortOptions = ['first_name', 'last_name', 'email', 'industry']
  if (sortOptions.indexOf(sortBy) > -1) {
    return mutatedData.sort((a, b) => {
      // TODO add extra condition to deal with numbers or strings
      const A = !a[sortBy] || a[sortBy] === 'n/a' ? '' : a[sortBy]
      const B = !b[sortBy] || b[sortBy] === 'n/a' ? '' : b[sortBy]

      return A < B ? sortDirectionEnum[0] : sortDirectionEnum[1]
    })
  }

  return mutatedData.sort((a, b) => {
    // TODO add extra condition to deal with numbers or strings
    const A = !a[sortBy] || a[sortBy] === 'n/a' ? null : a[sortBy]
    const B = !b[sortBy] || b[sortBy] === 'n/a' ? null : b[sortBy]
    return A < B ? sortDirectionEnum[0] : sortDirectionEnum[1]
  })
}

export const getSortedBy = ({ sortBy }) => sortBy

export const getFilterQuery = ({ filter }) => filter

export const getSortDirection = ({ sortDirection }) => sortDirection
