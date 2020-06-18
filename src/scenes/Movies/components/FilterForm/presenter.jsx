import React from 'react'
import MovieIcon from '@material-ui/icons/Movie'
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel'
import TvIcon from '@material-ui/icons/Tv'
import { makeStyles } from '@material-ui/core/styles'
import Chip from './components/Chip'
import Skeleton from '@material-ui/lab/Skeleton'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      marginRight: theme.spacing(1),
    },
  },
}))

const FilterForm = ({ loading, type, onFilter, onResetFilter }) => {
  const classes = useStyles()

  const onClickHandler = (selectedType) => {
    if (selectedType !== type) {
      onFilter(selectedType)
    }
  }

  const onDeleteHandler = () => {
    if (type) {
      onResetFilter()
    }
  }

  return (
    <div className={classes.root}>
      {!type && loading ? (
        Array.from(new Array(3)).map((_, i) => (
          <Skeleton width={90} height={32} key={i} />
        ))
      ) : (
        <>
          <Chip
            loading={loading}
            value='movie'
            label='Movie'
            icon={<MovieIcon />}
            type={type}
            onClick={onClickHandler}
            onDelete={onDeleteHandler}
          />
          <Chip
            loading={loading}
            value='series'
            label='Series'
            icon={<ViewCarouselIcon />}
            type={type}
            onClick={onClickHandler}
            onDelete={onDeleteHandler}
          />
          <Chip
            loading={loading}
            value='episode'
            label='Episode'
            icon={<TvIcon />}
            type={type}
            onClick={onClickHandler}
            onDelete={onDeleteHandler}
          />
        </>
      )}
    </div>
  )
}

export default FilterForm
