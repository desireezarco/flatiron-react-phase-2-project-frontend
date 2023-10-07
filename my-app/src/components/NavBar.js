import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import {GiBigDiamondRing} from 'react-icons/gi';
import {FaTimes, FaBars} from 'react-icons/fa'
// import {TbMessage2Heart} from 'react-icons/tb';
// import {MdHdrEnhancedSelect, MdRsvp} from 'react-icons/md';

function NavBar(){
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false);

    return(
        <>
        <IconContext.Provider value={{color: "#fff"}}>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo' onClick={closeMenu}>
                    <GiBigDiamondRing className='navbar-icon' />
                    Mona & Dixon
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-items'>
                        <NavLink 
                        to="/" 
                        className={({ isActive}) => 
                        "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMenu}
                    >
                        Home
                        </NavLink>
                    </li>
                    <li className='nav-items'>
                        <NavLink 
                        to="/rsvp" 
                        className={({ isActive}) => 
                        "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMenu}
                    >
                        RSVP
                        </NavLink>
                    </li>
                    <li className='nav-items'>
                        <NavLink 
                        to="/messages" 
                        className={({ isActive}) => 
                        "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMenu}
                    >
                        Messages
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        </IconContext.Provider>
        </>
    )
}


export default NavBar;
