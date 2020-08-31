import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Popcorn.css';

/**Shows Popcorn
 * 
 * Props: 
 * -None
 * 
 * State:
 * -popcornCoords [{xValue, yValue},...]
 * 
 * App -> Route(/popcorn) -> Popcorn
 */
function Popcorn(){
  const popcornImgURL = 'https://www.vhv.rs/dpng/d/3-39613_single-popcorn-png-transparent-png.png';
  const [popcornCoords, setPopcornCoords] = useState([]);
  
  function handleChange(evt) {
    const xValue = Math.floor(Math.random()*100);
    const yValue = Math.floor(Math.random()*100);
    setPopcornCoords( popcornCoords => [...popcornCoords, {xValue, yValue}])
  }

  function renderPopcorn() {
    return popcornCoords.map( popcornCoords =>(
      <img
        src={popcornImgURL}
        alt='Popcorn'
        style={{
          top:`${popcornCoords.xValue}vh`, 
          left: `${popcornCoords.yValue}vw`,
          position: 'absolute',
          width: '200px',
          height: 'auto',
          backgroundColor: 'transparent'
        }}
        />
    ))
    // const imgArray = [];
    // for(let i=0; i<popcornCount; i++) {
    //   const xValue = Math.floor(Math.random()*100);
    //   const yValue = Math.floor(Math.random()*100);
    //   const imgStyle={
    //     position: 'absolute',
    //     width: '200px',
    //     height: 'auto',
    //     left: `${xValue}vw`,
    //     top: `${yValue}vh`
    //   }
    //   imgArray.push(<img src={popcornImgURL} style={imgStyle} alt='popcorn'/>)
    // }
    // console.log('imgArray', imgArray);
    // return imgArray
  }

  return(
    <div className='Popcorn'>
      <h1>Pop...Pop...Pop</h1>
      <Link to='/' className='btn btn-warning'>Go Back</Link>
      {renderPopcorn()}
      <button onClick={handleChange}>How many pieces?</button>
  <p>Pieces: {popcornCoords.length}</p>
    </div>
  )
}

export default Popcorn;