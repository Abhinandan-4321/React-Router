import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav style={{display:"flex", justifyContent:"space-between"}}>
            <div>
                <img src="https://kalvium.com/wp-content/uploads/2023/04/Kalvium-Logo-SVG.svg" alt="" style={{height:"40px"}} />
            </div>
            <div style={{display:"flex",justifyContent:"space-evenly", width:"247px", marginTop:"15px"}}>
                <div><Link to="/">Home</Link></div>
                <div><Link to="/about">About</Link></div>
                <div><Link to="/contact">Contact</Link></div>
            </div>
            
        </nav>
    </div>
  )
}

export default Navbar