import React from 'react'
import './index.css'

const GithubRibbon = ({ url }) => {
  return (
    <a
      className='github-fork-ribbon'
      href={url}
      data-ribbon='GitHub'
      title='GitHub'
      target='_blank'
      rel='noreferrer noopener'>
      GitHub
    </a>
  )
}

export default GithubRibbon
