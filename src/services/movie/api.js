import axios from '../axios'

const handleError = (error) => console.error('[API]', error)

const fetchBySearch = async (searchTerm = '', page = 1, type = '') => {
  const { data } = await axios.get('/', {
    params: {
      s: searchTerm,
      page,
      type,
    },
  })
  const { Response: response, Error: error, ...result } = data

  if (response === 'False') {
    handleError(error)
    throw new Error('No results found')
  }

  return result
}

const fetchByID = async (id) => {
  const { data } = await axios.get('/', {
    params: {
      i: id,
      plot: 'full',
    },
  })
  const { Response: response, Error: error, ...result } = data

  if (response === 'False') {
    handleError(error)
    throw new Error('No result found')
  }

  return result
}

export default {
  fetchBySearch,
  fetchByID,
}
