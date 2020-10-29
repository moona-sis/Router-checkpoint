import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
          <div className='navbar-content'>
          
            <div className='navbar'>
                <div className='link'>
                    <Link  style={{  fontWeight: "700" }} to="/">Home</Link></div>
            <div className='link' ><Link style={{   fontWeight: "700" , cursor: "pointer"}}to="/categories">Categories</Link></div>
            <div className='link' ><Link  style={{  fontWeight: "700", cursor: "pointer" }}to="/products">Products</Link></div>
            <div className='link'><Link style={{   fontWeight: "700" , cursor: "pointer"}}  to="/login">Admin area</Link></div>
            
            </div>
            </div>
      
    )
}

export default Navbar
