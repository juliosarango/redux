import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handle-error'
import VideoPlayer from '../../player/containers/video-player'

import { connect } from 'react-redux';

class Home extends Component {

  state = {
    modalVisible: false,
  }

  handelOpenModal = (media) => {
    this.setState({
      modalVisible: true,
      //esto es igual a decir media: media -> sugar syntax
      media
    })
  }

  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false,
    })
  }

   render() {
     return (
       <HandleError>
         <HomeLayout>
           <Related />
           <Categories
             categories={this.props.categories}
             handelOpenModal = {this.handelOpenModal}
           />
           {
             // esta es una forma de hacer un if sin else, hacer todo loq ue esté a continuación
             // del &&
             this.state.modalVisible &&
               <ModalContainer>
                 <Modal handleClick={this.handleCloseModal}>
                   <VideoPlayer
                     autoplay
                     src = {this.state.media.src}
                     title = {this.state.media.title}
                   />
                 </Modal>
               </ModalContainer>
           }
         </HomeLayout>

       </HandleError>

     )
   }
}

//el state es el estado de redux, los props son los que sen evnían
// al hacer render el componente
function mapStateToProps(state, props) {
  // renornamos los datos que queremos enviar al componente Home como nuevas propiedades
  return {
    // en este caso enviamos categories al componente Home
    categories: state.data.categories

  }

}

export default connect(mapStateToProps)(Home)
