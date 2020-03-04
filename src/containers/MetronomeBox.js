import React, {Component} from 'react';
import SpeedSelector from '../components/SpeedSelector'
import SoundSelector from '../components/SoundSelector'

class MetronomeBox extends Component{

  constructor(props){
    super(props);
    this.state = {
      speed: 200,
      sound: new Audio('/sounds/tick.wav'),
      myTimer: null
    }
    this.playSound = this.playSound.bind(this)
    this.loopAudio = this.loopAudio.bind(this)
    this.clearAudio = this.clearAudio.bind(this)
    this.handleSpeedSelected = this.handleSpeedSelected.bind(this)
    this.handleSoundSelected = this.handleSoundSelected.bind(this)
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
  }

  loopAudio(){
      this.setState({
        myTimer: setInterval(this.playSound, this.state.speed)
        });
  }

  clearAudio(){
    clearInterval(this.state.myTimer)
  }

  playSound(){
    const audioFile = new Audio(this.state.sound)
    this.state.sound.play()
  }

  render(){

    return(

      <section>
        <h1>Metronome</h1>
        <p>Speed: {this.state.speed}</p>
        <button onClick={this.loopAudio}>PLAY!</button>
        <button onClick={this.clearAudio}>HANNAH!</button>
        <SpeedSelector speed={this.state.speed}  onSpeedSelected={this.handleSpeedSelected}/>
        <SoundSelector sound={this.state.sound}  onSoundSelected={this.handleSoundSelected}/>
      </section>
    )
  }
}

export default MetronomeBox;
