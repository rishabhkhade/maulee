import React from 'react'
import "./footer.scss"
import logo_footer from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>

            <div className="parent footer-parent">
                <div className="cont footer-cont">
                    <img src={logo_footer} alt="" />
                    <div className="nav-footer">
                        <Link>Home</Link>
                        <Link>About</Link>
                        <Link>Moulees Work</Link>
                        <Link>Blogs</Link>
                        <Link>Courses</Link>
                    </div>
                    <p>Copyright/Maulees Tatoos</p>
                </div>
            </div>
        </>
    )
}

export default Footer
