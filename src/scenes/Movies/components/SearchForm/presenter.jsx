import React, { useState, useEffect } from 'react'

const SearchForm = ({ searchTerm = '', onSearch, onSearchClear }) => {
  const [input, setInput] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    setInput(searchTerm)
  }, [searchTerm])

  const onSubmitHandler = (e) => {
    e.preventDefault()
    setError('')
    if (input.length < 3) {
      setError('minimum 3 chars')
      return
    }
    onSearch(input)
  }

  const onResetHandler = (e) => {
    e.preventDefault()
    setError('')
    onSearchClear()
  }

  return (
    <form onSubmit={onSubmitHandler} onReset={onResetHandler}>
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
        <button type='reset'>
          <span role='img' aria-label='clear search'>
            ❌
          </span>
        </button>
      </div>
      <div>{error}</div>
    </form>
  )
}

export default SearchForm
