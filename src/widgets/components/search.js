import React from 'react'
import './search.css'

function Search(props) {
  return (
    <form
      onSubmit={props.handleSubmit}
      action="" className="Search">
      <input
        ref={props.setRef}
        type="text"
        className="Search-input"
        placeholder="Busca tu video favorito"
        defaultValue="Bitcoin"
        name="search" />
    </form>
  )
}

export default Search
