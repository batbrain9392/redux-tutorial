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
  return data
}

const fetchByID = async (id) => {
  const { data } = await axios.get('/', {
    params: {
      i: id,
      plot: 'full',
    },
  })
  return data
}

export default {
  fetchBySearch,
  fetchByID,
}
