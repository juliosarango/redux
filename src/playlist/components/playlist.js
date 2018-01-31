import React, { Component } from 'react'
import Media from './media'
import './playlist.css'

function Playlist (props) {
  return (
    <div className="Playlist">
      {
        props.playlist.map( item => {
          //{...item}: es una propiedad javascript llamada spread operator que me envia cada una de las propiedades de item
          // sin tener que descomponer cada una de ellas., es igual a decir: author="" cover="" title=""
          return <Media openModal = {props.handelOpenModal}  {... item} key={item.id} />
        })
      }
    </div>
  )
}


export default Playlist
