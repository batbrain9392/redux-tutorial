import axios from '../axios'

const fetchBySearch = async (
  searchTerm = '',
  page = 1,
  type = '',
  year = ''
) => {
  const { data } = await axios.get('/', {
    params: {
      s: searchTerm,
      page,
      type,
      y: year,
    },
  })
  const { Response: response, Error: error, ...result } = data

  if (response === 'False') throw new Error(error)

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

  if (response === 'False') throw new Error(error)

  return result
}

export default {
  fetchBySearch,
  fetchByID,
}
