import React, { useState, useEffect } from 'react'
import SearchForm from './presenter'
import { useSelector, useDispatch } from 'react-redux'
import { resetSearch, search } from '../../../../services/filter/slice'

export default () => {
  const searchTerm = useSelector((state) => state.filter.searchTerm)
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const [error, setError] = useState()

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
    dispatch(search(input))
  }

  const onResetHandler = (e) => {
    e.preventDefault()
    setInput('')
    setError()
    dispatch(resetSearch())
  }

  return (
    <SearchForm
      input={input}
      setInput={setInput}
      error={error}
      searchTerm={searchTerm}
      onSubmit={onSubmitHandler}
      onReset={onResetHandler}
    />
  )
}
