import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Nav.css';

function Nav() {
  const navigate = useNavigate();
  return (
    <div> 
      <nav className='nav'>
        {/* <ul> */}
      <button className='btn' onClick={()=>navigate("/batterySettings")}>Battery</button>
      <button className='btn' onClick={()=>navigate("/config")}> config</button>
      {/* </ul> */}
      </nav>
    </div>
  )
}

export default Nav