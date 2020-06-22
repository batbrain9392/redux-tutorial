import React, { useState, useEffect, useRef } from 'react'
import SearchForm from './presenter'
import { useSelector, useDispatch } from 'react-redux'
import { resetSearch, search } from '../../../../services/filter/slice'

export default () => {
  const searchTerm = useSelector((state) => state.filter.searchTerm)
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const [error, setError] = useState()
  const previousRequest = useRef()
  const inputRef = useRef(null)

  useEffect(() => {
    setInput(searchTerm)
  }, [searchTerm])

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (previousRequest.current) {
      previousRequest.current.abort()
    }
    setError('')
    if (input.length < 3) {
      setError('minimum 3 chars')
      return
    }
    if (inputRef.current) {
      inputRef.current.blur()
    }
    previousRequest.current = dispatch(search(input))
  }

  const onResetHandler = (e) => {
    e.preventDefault()
    setInput('')
    setError()
    dispatch(resetSearch())
  }

  return (
    <SearchForm
      inputRef={inputRef}
      input={input}
      setInput={setInput}
      error={error}
      searchTerm={searchTerm}
      onSubmit={onSubmitHandler}
      onReset={onResetHandler}
    />
  )
}
