import React from 'react'
import Icon from './icon'

//componente funcional

function Play(props) {
  return (
    <Icon {... props}>
      <path d="M5 4l20 12-20 12z"></path>
    </Icon>
  )
}

export default Play
