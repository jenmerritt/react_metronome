import React from 'react';
import './SpeedSelector.css'
function SpeedSelector(props){

  function handleChange(event){
    props.onSpeedSelected(event.target.value)
  }


  return(
    <section>
    <input className={props.sliderIcon} id="reversedRange" type="range" min="200" max="1000" onChange={handleChange}/>


    </section>
  )
}

export default SpeedSelector;
