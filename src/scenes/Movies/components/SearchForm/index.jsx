import React, { useState, useEffect, useRef } from 'react'
import SearchForm from './presenter'
import { useSelector, useDispatch } from 'react-redux'
import { resetSearch } from '../../../../services/filter/slice'
import { useHistory } from 'react-router-dom'

export default () => {
  const searchTerm = useSelector((state) => state.filter.searchTerm)
  const dispatch = useDispatch()
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
