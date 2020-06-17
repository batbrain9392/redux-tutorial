import React from 'react'

const FilterForm = ({ filterValues, pages, onFilter, onResetFilter }) => {
  const { page, type, year } = filterValues

  return (
    <div>
      <select
        value={page}
        onChange={(e) => onFilter(e.target.value, type, year)}>
        <option>1</option>
        {pages.map((page) => (
          <option key={page}>{page}</option>
        ))}
      </select>
      <select
        value={type}
        onChange={(e) => onFilter(page, e.target.value, year)}>
        <option value=''>Select type</option>
        <option value='movie'>Movie</option>
        <option value='series'>Series</option>
        <option value='episode'>Episode</option>
      </select>
      <input
        type='text'
        placeholder='Enter year'
        value={year}
        onChange={(e) => onFilter(page, type, e.target.value)}
      />
      <button onClick={onResetFilter}>
        <span role='img' aria-label='clear filters'>
          ❌
        </span>
      </button>
    </div>
  )
}

export default FilterForm
