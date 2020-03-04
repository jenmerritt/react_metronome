import React from 'react';

function SpeedSelector(props){

  function handleChange(event){
    props.onSpeedSelected(event.target.value)
  }


  return(
    <section>
    <input type="range" min="200" max="1000" step="50" onChange={handleChange}/>


    </section>
  )
}

export default SpeedSelector;
