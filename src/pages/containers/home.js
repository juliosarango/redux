import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handle-error'
import VideoPlayer from '../../player/containers/video-player'

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
             categories={this.props.data.categories}
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

export default Home
