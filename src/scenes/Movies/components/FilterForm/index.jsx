import React from 'react'
import FilterForm from './presenter'
import { useSelector, useDispatch } from 'react-redux'
import { setType } from '../../../../services/filter/slice'

export default () => {
  const type = useSelector((state) => state.filter.type)
  const dispatch = useDispatch()

  const onFilterHandler = (selectedType) => {
    dispatch(setType(selectedType))
  }

  const onResetFilterHandler = () => {
    dispatch(setType(''))
  }

  return (
    <FilterForm
      type={type}
      onFilter={onFilterHandler}
      onResetFilter={onResetFilterHandler}
    />
  )
}
