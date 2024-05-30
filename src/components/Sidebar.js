import React from 'react'
import "../Style/Sidebar.scss"
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar-item container' id="navbarScroll">
        <div className='sidebar-content'>
          <div className='animation'>
          <div className='img-user'>
            <img src='./user.jpg' alt='img-user'></img>
          </div>
          <ul className='link-items'>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="./About">About</NavLink>
            </li>
            <li>
              <NavLink to="./portfolio">Portfolio</NavLink>
            </li>
          </ul>
          <div className='resume'>
          <a href="./Mohammed_Sallam.pdf" download="Mohammed_Sallam">
            <button className="resume-btn">Resume</button>
            <svg stroke="currentColor" fill="currentColor"
              stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <g id="Share_1"><g>
            <path d="M12.223,11.075a.5.5,0,0,0,.7.71l7-7v3.58a.508.508,0,0,0,.5.5.5.5,0,0,0,.5-.5V3.575a.5.5,0,0,0-.5-.5h-4.79a.5.5,0,0,0,0,1h3.58Z"></path><path d="M17.876,20.926H6.124a3.053,3.053,0,0,1-3.05-3.05V6.124a3.053,3.053,0,0,1,3.05-3.05h6.028a.5.5,0,0,1,0,1H6.124a2.053,2.053,0,0,0-2.05,2.05V17.876a2.053,2.053,0,0,0,2.05,2.05H17.876a2.053,2.053,0,0,0,2.05-2.05V11.849a.5.5,0,0,1,1,0v6.027A3.053,3.053,0,0,1,17.876,20.926Z"></path></g></g></svg></a>
          </div>

          </div>
        </div>
    </div>
  )
}

export default Sidebar