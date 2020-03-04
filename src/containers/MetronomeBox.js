import React, {Component} from 'react';
import SpeedSelector from '../components/SpeedSelector'
import SoundSelector from '../components/SoundSelector'

class MetronomeBox extends Component{

  constructor(props){
    super(props);
    this.state = {
      speed: 40,
      sound: {
        title: "chicken",
        file: 'blah.mp3'
      }
    }
  }

  render(){
    return(
      <section>
        <h1>Metronome</h1>
        <p>Speed: {this.state.speed}</p>
        <p>Sound: {this.state.sound.title}</p>
        <SpeedSelector speed={this.state.speed} />
        <SoundSelector sound={this.state.sound} />
      </section>
    )
  }
}

export default MetronomeBox;
