import { getDataFields } from './data'
import { formatString } from '../components/utils'
import moment from 'moment'

//get number of nullable fields
export const getBarChartData = ({ data }) => {
  const fields = getDataFields({ data })

  if (fields) {
    const dataFields = fields.filter(field => field !== 'id')
    const accumulator = {}
    dataFields.forEach(field => (accumulator[field] = 0))

    data.forEach(record => {
      dataFields.forEach(field => {
        if (!record[field] || record[field] === 'n/a') {
          accumulator[field] += 1
        }
      })
    })

    return Object.entries(accumulator).map(field => ({
      key: formatString(field[0]),
      value: field[1]
    }))
  }
  return []
}

//return all the
export const getLineChartData = ({ data }) => {
  if (data) {
    return data
      .filter(
        record =>
          record.date_of_birth && record.salary && record.years_of_experience
      )
      .sort((a, b) =>
        moment(a.date_of_birth, 'DD/MM/YYYY').valueOf() <
        moment(b.date_of_birth, 'DD/MM/YYYY').valueOf()
          ? -1
          : 1
      )
  }
  return []
}

export const getStatsData = ({ data }) => {
  if (data) {
    let maxYearsOfExperience
    let bins = []
    let records = []
    let higherSalary = 0
    const filteredData = data.filter(
      record => record.years_of_experience && record.salary
    )

    maxYearsOfExperience = Math.max.apply(
      Math,
      filteredData.map(function(record) {
        return record.years_of_experience
      })
    )

    for (let i = 0; i <= maxYearsOfExperience; i++) {
      bins[i] = []
    }

    filteredData.forEach(record => {
      bins[Math.floor(record.years_of_experience)].push(record)
    })

    const meanSalaries = bins.map(bin => {
      return (
        bin.reduce((acc, cur) => {
          if (cur.salary > higherSalary) higherSalary = cur.salary
          return acc + cur.salary
        }, 0) / filteredData.length
      )
    })
    for (let i = 0; i < bins.length; i++) {
      records[i] = {
        meanSalary: meanSalaries[i],
        numOfRecords: bins[i].length,
        percentageOfRecords: bins[i].length / filteredData.length,
        minBinExperience: i,
        maxBinExperience: i + 1
      }
    }

    return {
      records,
      higherSalary,
      totalNumOfRecords: filteredData.length
    }
  }
  return {}
}
