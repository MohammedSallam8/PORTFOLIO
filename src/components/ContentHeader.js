import React, { useState } from 'react'
import "../Style/ContentHeader.scss"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import ReactWhatsapp from 'react-whatsapp';
import "../Style/Sidebar.scss"
import { NavLink } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Slide } from "react-awesome-reveal";
import { IoClose } from "react-icons/io5";

const ContentHeader = () => {

  return (
      <div className='all-content'>
       
        <div className="animation">
                {['end'].map(
                  (direction) => (
                    <DropdownButton
                      key={direction}
                      id={`dropdown-button-drop-${direction}`}
                      drop={direction}
                      variant="secondary"
                      title={``}
                    > 
                    <Slide>
                      <Dropdown.Item eventKey="1">
                        <label className='cloth' htmlFor={`dropdown-button-drop-${direction}`}>
                          <IoClose />
                        </label>
                        <div className='sidebar-item1 container' id="navbarScroll">
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
                      </Dropdown.Item>
                      </Slide>
                    </DropdownButton>
                  ),
                )}
        </div>

        




        <div className='content-header'>
        <Navbar expand="lg">
          <Container fluid>
              <Nav className="me-auto my-2 my-lg-0">
                <div className='social-items'>
                  <ul className='link-items'>
                    <li><a href='https://github.com/MohammedSallam8'><FaGithub className='git'/></a></li>
                    <li><a href='https://mhmd.sallam98@gmail.com'><BiLogoGmail className='gmail' /></a></li>
                    <li><a><ReactWhatsapp number="+201274280288"><IoLogoWhatsapp className='whats'/></ReactWhatsapp></a></li>
                    <li><a href='https://www.linkedin.com/in/sallam7/'><FaLinkedin className='linked'/></a></li>
                  </ul>
                </div>
              </Nav>
          </Container>
        </Navbar>
        </div>
    </div>
  )
}

export default ContentHeader