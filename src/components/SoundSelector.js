import React from 'react';
import './SoundSelector.css'


function SoundSelector(props){

  function handleChange(event){
    props.onSoundSelected(event.target.value);
}

  return(
    <select defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Choose a Sound!</option>
      <option value="/sounds/tick.wav">Tick</option>
      <option value="/sounds/dog.mp3">Dog</option>
      <option value="/sounds/monstermunch.mp3">Monster Munch</option>
      <option value="/sounds/meow.mp3">Meow</option>
      <option value="/sounds/jelly.mp3">Jelly</option>
    </select>
  )
}

export default SoundSelector;
