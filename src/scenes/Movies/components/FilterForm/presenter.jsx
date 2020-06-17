import React from 'react'

const FilterForm = ({ filterValues, onFilter, onResetFilter }) => {
  const { type, year } = filterValues

  return (
    <div>
      <select value={type} onChange={(e) => onFilter(e.target.value, year)}>
        <option value=''>Select type</option>
        <option value='movie'>Movie</option>
        <option value='series'>Series</option>
        <option value='episode'>Episode</option>
      </select>
      <input
        type='text'
        placeholder='Enter year'
        value={year}
        onChange={(e) => onFilter(type, e.target.value)}
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
