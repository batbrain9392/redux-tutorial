import React from 'react'

const SearchForm = ({
  input,
  setInput,
  error,
  searchTerm,
  onSubmit,
  onReset,
}) => {
  return (
    <form onSubmit={onSubmit} onReset={onReset}>
      <div>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type='submit'>
          <span role='img' aria-label='search'>
            🔍
          </span>
        </button>
        {searchTerm && (
          <button type='reset'>
            <span role='img' aria-label='clear search'>
              ❌
            </span>
          </button>
        )}
      </div>
      <div>{error}</div>
    </form>
  )
}

export default SearchForm
