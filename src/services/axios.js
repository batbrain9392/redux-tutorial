import axios from 'axios'

axios.defaults.baseURL = 'http://www.omdbapi.com/'
axios.interceptors.request.use(
  (config) => {
    config.params = {
      apikey: process.env.REACT_APP_API_KEY,
      ...config.params,
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axios
