import React, {Component} from 'react';
import SpeedSelector from '../components/SpeedSelector'
import SoundSelector from '../components/SoundSelector'
import './MetronomeBox.css'


class MetronomeBox extends Component{

  constructor(props){
    super(props);
    this.state = {
      speed: 200,
      sound: new Audio('/sounds/tick.wav'),
      myTimer: null,
      isPlaying: false,
      sliderIcon: "slider"
    }
    this.playSound = this.playSound.bind(this)
    this.loopAudio = this.loopAudio.bind(this)
    this.clearAudio = this.clearAudio.bind(this)
    this.handleSpeedSelected = this.handleSpeedSelected.bind(this)
    this.handleSoundSelected = this.handleSoundSelected.bind(this)
    this.playCountdown = this.playCountdown.bind(this)
  }

  handleSpeedSelected(newSpeed){
    this.setState({
      speed: newSpeed
    })
    this.clearAudio()
    this.loopAudio()
  }

  handleSoundSelected(newSound){
    this.setState({
      sound: new Audio(newSound)
    })
    if(newSound === '/sounds/tick.wav'){
      this.setState({sliderIcon: 'tick'})
    }
    if(newSound === '/sounds/monstermunch.mp3'){
      this.setState({sliderIcon: 'monstermunch'})
    }
    if(newSound === '/sounds/jelly.mp3'){
      this.setState({sliderIcon: 'jelly'})
    }
    if(newSound === '/sounds/dog.mp3'){
      this.setState({sliderIcon: 'dog'})
    }
    if(newSound === '/sounds/meow.mp3'){
      this.setState({sliderIcon: 'meow'})
    }
  }

  loopAudio(){
    if(!this.state.isPlaying){
      this.setState({
        myTimer: setInterval(this.playSound, this.state.speed),
        isPlaying: true
        });
      }
  }

  clearAudio(){
    clearInterval(this.state.myTimer)
    this.setState({
      isPlaying: false
      });
  }

  playSound(){
    this.state.sound.play()
  }

  playCountdown(){
    this.setState({sound: new Audio('/sounds/countdown.mp3')})
    this.loopAudio()
  }

  render(){

    return(

      <section id="metronome-box">
        <h1>Metronome</h1>
        <p>BPM: {parseFloat(60000/this.state.speed).toFixed(0)}</p>
        <button id="play-button" onClick={this.loopAudio}>▶️</button>
        <button id="hannah-button" onClick={this.clearAudio}>Stop!</button>
        <SoundSelector sound={this.state.sound}  onSoundSelected={this.handleSoundSelected}/>
        <SpeedSelector className={this.sliderIcon} sliderIcon={this.state.sliderIcon} speed={this.state.speed}  onSpeedSelected={this.handleSpeedSelected}/>
        <div id="countdown" onClick={this.playCountdown}></div>
      </section>
    )
  }
}

export default MetronomeBox;
