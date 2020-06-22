import React, { useState, useEffect, useRef } from 'react'
import SearchForm from './presenter'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default () => {
  const searchTerm = useSelector((state) => state.filter.searchTerm)
  const [input, setInput] = useState('')
  const [error, setError] = useState()
  const inputRef = useRef(null)
  const history = useHistory()

  useEffect(() => {
    setInput(searchTerm)
  }, [searchTerm])

  const onSubmitHandler = (e) => {
    e.preventDefault()
    setError('')
    if (input.length < 3) {
      setError('Minimum 3 chars')
      return
    }
    if (inputRef.current) inputRef.current.blur()
    if (input === searchTerm) return
    history.push(`/?search=${input}`)
  }

  return (
    <SearchForm
      inputRef={inputRef}
      input={input}
      setInput={setInput}
      error={error}
      onSubmit={onSubmitHandler}
    />
  )
}
