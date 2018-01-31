import React, { Component } from 'react'
import Playlist from 'playlist'

class Contenedor extends Component {
  render() {
    const {data: {categories} } = this.props
    return (
      <div>
        categories.map ( category => ( <Playlist {... category } key={category.id} />))
      </div>
    )
  }
}
