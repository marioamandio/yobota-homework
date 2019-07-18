export const getDataFields = ({ data }) => {
  if (data.length) {
    return Object.keys(data[0])
  }
}

export const getDataError = ({ error }) => error

export const getDataLoading = ({ fetching }) => fetching
