import React from 'react'

import Play from '../../icons/components/play'
import Pause from '../../icons/components/pausa'

import './play-pause.css'

function PlayPause(props) {
  return (
    <div className="PlayPause">
      {
        // si el estado de pause es true, mostramos play, caso contrario mostramos pause.
        props.pause ?
          <button onClick = {props.handleClick}>
            <Play size = {25} color = "white" />
          </button>
        :
          <button onClick = {props.handleClick}>
            <Pause size = {25} color = "white" />
          </button>
      }
    </div>
  )
}

export default PlayPause
