import React from 'react'
import PropTypes from 'prop-types'
import './media.css'

class Media extends React.Component {

// con la forma tradicional, debemos primero llamar al constructor y hacer un bind del contexto general
/*  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    console.log(this.props.title)
  }*/

  // todas las lines anteriores se pueden omitir con arrow function de la siguiente manera
  // esto debido a que los arrow functions heredan el contexto de su padre.

  state = {
    author: this.props.author
  }


  handleClick = (event) => {
    this.props.openModal(this.props)
  }

  render() {
    const styles = {
      container: {
        color: '#44546b',
        cursor: 'pointer',
        width: 260,
        border: '1px solid red'
      }
    }
    return (
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img
            src={this.props.cover}
            alt=""
            width={240}
            height={160}
            className="Media-image"
          />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
        </div>
      </div>
    )
  }
}

/**
 definimos las propiedades que tienen nuestros elementos
*/

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
}

export default Media
