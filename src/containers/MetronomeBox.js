import React, {Component} from 'react';
import SpeedSelector from '../components/SpeedSelector'
import SoundSelector from '../components/SoundSelector'

class MetronomeBox extends Component{

  constructor(props){
    super(props);
    this.state = {
      speed: 1000,
      sound: {
        title: "tick",
        audio: new Audio('/sounds/tick.wav')
      },
      myTimer: null
    }
    this.playSound = this.playSound.bind(this)
    this.loopAudio = this.loopAudio.bind(this)
    this.clearAudio = this.clearAudio.bind(this)
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
    const audioFile = new Audio(this.state.sound.filePath)
    this.state.sound.audio.play()
  }

  render(){

    return(

      <section>
        <h1>Metronome</h1>
        <p>Speed: {this.state.speed}</p>
        <p>Sound: {this.state.sound.title}</p>
        <button onClick={this.loopAudio}>PLAY!</button>
        <button onClick={this.clearAudio}>HANNAH!</button>
        <SpeedSelector speed={this.state.speed} />
        <SoundSelector sound={this.state.sound} />
      </section>
    )
  }
}

export default MetronomeBox;
