import React from 'react';
import { Link } from 'react-router-dom';

/**Shows Cookies
 * 
 * Props: 
 * -None
 * 
 * State:
 * -None
 * 
 * App -> Route(/cookies) -> Popcorn
 */
function Cookies(){

  return(
    <div>
      <h1>Chocolate chip or Oatmeal Raisin?</h1>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default Cookies;