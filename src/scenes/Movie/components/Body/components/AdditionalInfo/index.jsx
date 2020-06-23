import React from 'react'
import Grid from '@material-ui/core/Grid'
import Info from '../Info'

const AdditionalInfo = ({ entity, loading }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6}>
        <Info loading={loading} label='Awards' value={entity?.Awards} first />
        <Info loading={loading} label='Rating' value={entity?.Rated} />
        <Info loading={loading} label='Release Date' value={entity?.Released} />
        <Info loading={loading} label='Runtime' value={entity?.Runtime} />
        <Info loading={loading} label='Genre' value={entity?.Genre} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Info
          loading={loading}
          label='Language'
          value={entity?.Language}
          first
        />
        <Info loading={loading} label='Country' value={entity?.Country} />
        <Info loading={loading} label='DVD Release Date' value={entity?.DVD} />
        <Info
          loading={loading}
          label='Box Office Collection'
          value={entity?.BoxOffice}
        />
        <Info loading={loading} label='Production' value={entity?.Production} />
      </Grid>
    </Grid>
  )
}

export default AdditionalInfo
