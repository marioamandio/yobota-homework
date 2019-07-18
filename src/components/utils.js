import numeral from 'numeral'

export const formatString = str => str.split('_').join(' ')
export const formatNumber = value => numeral(value).format('0,0.00')
