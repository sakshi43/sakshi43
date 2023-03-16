import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
    return ( <div >

        <a href = "#" > Logo </a>

        <nav>
        
        <ul >
        <li> < NavLink to = { "/" } > HomePage </NavLink></li >
        
        <li> < NavLink to = { "/About" } > About </NavLink></li >
        
        <li> < NavLink to = { "/Contact" } > Contact </NavLink></li >
        <li> < NavLink to = { "/login" }> Login </NavLink></li > </ul> 
        </nav>

        </div>


    )
}

export default Header