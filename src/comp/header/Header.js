import React, { useState } from 'react'
import "./header.scss"
import { MdOutlineSort } from "react-icons/md";
import logo_img from "../../assets/logo.png";
import { Link } from 'react-router-dom';
const Header = () => {

  const [navOpen, setNavOpen] = useState(false)

  return (
    <>
      <div className="parent header-parent">
        <div className="cont header-container">
          {/* <img src={logo_img} /> */}
          <span className='hamburger' onClick={() => setNavOpen(!navOpen)}><MdOutlineSort /></span>
        </div>
      </div>


      {
        navOpen && <div className="parent nav-parent">
          <div className="cont nav-container">
            <Link>Home</Link>
            <Link>Home</Link>
            <Link>Home</Link>
            <Link>Home</Link>
            <Link>Home</Link>
          </div>
        </div>
      }


    </>
  )
}

export default Header
