import React from 'react';
import { Link } from 'react-router-dom';

/**Shows Popcorn
 * 
 * Props: 
 * -None
 * 
 * State:
 * -None
 * 
 * App -> Route(/popcorn) -> Popcorn
 */
function Popcorn(){

  return(
    <div>
      <h1>Pop...Pop...Pop</h1>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default Popcorn;