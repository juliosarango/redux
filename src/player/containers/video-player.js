import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'
import ProgressBar from '../components/progress-bar'
import Spinner from '../components/spinner'
import {formattedTime, manejoFullScreen}  from '../../utilities/utils'
import Volume from '../components/volume'
import FullScreen from '../components/full-screen'

class  VideoPlayer extends Component {

  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false,
    mute: false,
    lastVolumen: 0
  }

  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }

  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay)
    })
  }

  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      duration: this.video.duration
    })
  }

  handleTimeUpdate = event => {
    this.setState({
      currentTime : this.video.currentTime
    })
  }

  handleProgressChange = event => {
    //event.tager.value
    this.video.currentTime = event.target.value
  }

  handleSeeking = event => {
    this.setState({
      loading: true
    })
  }

  handleSeeked = event => {
    this.setState({
      loading: false
    })

  }

  mute() {
    this.setState({
      mute: true,
      lastVolumen: this.video.volume
    })

    this.video.volume = 0
  }

  unmute() {
    this.setState({
      mute: false
    })

    this.video.volume = this.state.lastVolumen;
  }

  handleVolumeChange = event => {
    this.video.volume = event.target.value
  }

  handleVolumenToggle = event => {
    (this.state.mute) ? this.unmute()  : this.mute();
  }

  handleFullScreen = event => {
    manejoFullScreen(this.player);
  }

  setRef = element => {
    this.player = element;
  }

  render() {
    return (
      <VideoPlayerLayout
        setRef = {this.setRef}
      >
        <Title
          title = {this.props.title}
        />
        <Controls>
          <PlayPause
            pause = {this.state.pause}
            handleClick = {this.togglePlay}
          />
          <Timer
            duration = {formattedTime(this.state.duration)}
            currentTime = {formattedTime(this.state.currentTime)}
          />
          <ProgressBar
            duration = {this.state.duration}
            value = {this.state.currentTime}
            handleProgressChange = {this.handleProgressChange}
          />
          <Volume
            handleVolumeChange = {this.handleVolumeChange}
            handleVolumenToggle = {this.handleVolumenToggle}
          />
          <FullScreen
            handleFullScreen = {this.handleFullScreen}
          />
        </Controls>
        <Spinner
          active = {this.state.loading}
        />
        <Video
          autoplay = {this.props.autoplay}
          pause = {this.state.pause}
          handleLoadedMetadata = {this.handleLoadedMetadata}
          handleTimeUpdate = {this.handleTimeUpdate}
          handleSeeking = {this.handleSeeking}
          handleSeeked = {this.handleSeeked}
          src = {this.props.src}
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer
