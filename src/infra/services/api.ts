import axios from 'axios'

const api = axios.create({
  baseURL: 'http://194.31.52.245/'
})

export { api }
