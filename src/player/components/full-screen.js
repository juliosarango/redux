import React from 'react'
import FullScreenIcon from '../../icons/components/fullscreen'
import './full-screen.css'

function FullScreen(props) {
  return (
    <div className="FullScreen" onClick={props.handleFullScreen}>
      <FullScreenIcon
        size = {25}
        color = "white"
      />
    </div>
  )

}

export default FullScreen
