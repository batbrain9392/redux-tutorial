import axios from 'axios'

axios.defaults.baseURL = 'https://www.omdbapi.com/'
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

export const getSource = () => axios.CancelToken.source()

export default axios
