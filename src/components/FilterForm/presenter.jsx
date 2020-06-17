import React, { useState, useEffect } from 'react'

const FilterForm = ({ filterValues, pages, onFilter, onResetFilter }) => {
  const [page, setPage] = useState(1)
  const [type, setType] = useState('')
  const [year, setYear] = useState('')

  useEffect(() => {
    setPage(filterValues.page)
    setType(filterValues.type)
    setYear(filterValues.year)
  }, [filterValues.page, filterValues.type, filterValues.year])

  const onSubmitHandler = (e) => {
    e.preventDefault()
    onFilter(page, type, year)
  }

  const onResetHandler = (e) => {
    e.preventDefault()
    onResetFilter()
  }

  return (
    <form onSubmit={onSubmitHandler} onReset={onResetHandler}>
      <div>
        <select value={page} onChange={(e) => setPage(e.target.value)}>
          <option>1</option>
          {pages.map((page) => (
            <option key={page}>{page}</option>
          ))}
        </select>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value=''>Select type</option>
          <option value='movie'>Movie</option>
          <option value='series'>Series</option>
          <option value='episode'>Episode</option>
        </select>
        <input
          type='text'
          placeholder='Enter year'
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <button type='submit'>
          <span role='img' aria-label='filter'>
            🔍
          </span>
        </button>
        <button type='reset'>
          <span role='img' aria-label='clear filters'>
            ❌
          </span>
        </button>
      </div>
    </form>
  )
}

export default FilterForm
