import React from "react"
import {Link} from 'react-router-dom'
export default function NavBar(){
  return(
    <div>
      <nav>
        <ul>
          <Link to='/'>Home</Link>
        </ul>
        <ul>
          <Link to='/About'>About</Link>
        </ul>
        <ul>
          <Link to='/Contact'>Contact</Link>
        </ul>
      </nav>
      <h1></h1>
      <h1>hello this is NavBar</h1>
        
      </div>
  );
}