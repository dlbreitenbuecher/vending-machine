import React from 'react';
import { Link } from 'react-router-dom';

/**Shows SecondHandClothing
 * 
 * Props: 
 * -None
 * 
 * State:
 * -None
 * 
 * App -> Route(/second-hand-clothing) -> SecondHandClothing
 */
function SecondHandClothing(){

  return(
    <div>
      <h1>Used underwear to the highest bidder</h1>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default SecondHandClothing;