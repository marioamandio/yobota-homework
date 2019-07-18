import axios from 'axios'

export const rootQuery = () => axios.get(`http://localhost:4000/records/`)
