import React from 'react';
import { Link } from 'react-router-dom';

/**Shows Home
 * 
 * Props: 
 * -None
 * 
 * State:
 * -None
 * 
 * App -> Route(/) -> Home
 */
function Home(){

  return(
    <div>
      <h1>Hello. I am a Vending Machine. Give me yo monies.</h1>
      <img 
        src="https://vignette.wikia.nocookie.net/to-aru-majutsu-no-index/images/2/26/Jihanki.png/revision/latest?cb=20120504161315"
        alt="nippon-vending-machine" 
        className="img-fluid"
      />
    </div>
  )
}

export default Home;