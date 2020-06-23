import React, { useRef, useCallback } from 'react'
import FilterForm from './presenter'
import { useSelector, useDispatch } from 'react-redux'
import { setType } from '../../../../services/filter/slice'

export default () => {
  const type = useSelector((state) => state.filter.type)
  const dispatch = useDispatch()
  const previousRequest = useRef()

  const onFilterHandler = useCallback(
    (selectedType) => {
      if (previousRequest.current) {
        previousRequest.current.abort()
      }
      previousRequest.current = dispatch(setType(selectedType))
    },
    [dispatch]
  )

  const onResetFilterHandler = useCallback(() => {
    if (previousRequest.current) {
      previousRequest.current.abort()
    }
    previousRequest.current = dispatch(setType(''))
  }, [dispatch])

  return (
    <FilterForm
      type={type}
      onFilter={onFilterHandler}
      onResetFilter={onResetFilterHandler}
    />
  )
}
