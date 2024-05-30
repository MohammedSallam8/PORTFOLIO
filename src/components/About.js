import React from 'react'
import "../Style/About.scss"
import ContentHeader from './ContentHeader';
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="main-content container">
      <ContentHeader/>
      <Slide>
      <div className='route-pages'>
        <div className='about-page-container'>
          <div className='about-page-content'>
            <div className='row container'>
              <div class="col-lg-6 col-12">
                <div class="about-item">
                  <h4 class="title">SUMMARY</h4>
                  <p class="about-desc">Software Engineer, studies computer science 2017 – 2021 and found my passion for working on anything web related, eager to learn new things if needed .</p>
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div class="education-items">
                  <h4 class="title">EDUCATION</h4>
                  <div class="education-item">
                    <p>2017 – 2021</p>
                    <div class="education-university">
                      <h4>Mansoura University </h4>
                      <p>Bachelor of Computer Science</p>
                    </div>
                      <p>Mansoura</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div class="lang-items">
                  <h4 class="title">LANGUAGES</h4>
                  <div class="lang-item">
                    <h5>Arabic (Native)</h5><h5>English (Professional)</h5>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12">
              <div class="ref-items">
              <h4 class="title">REFERENCES</h4>
              <ul class="ref-item">
                <li><a href='https://github.com/MohammedSallam8'><FaGithub className='git'/><span>https://github.com/MohammedSallam8</span></a></li>
                    <li><a href='https://mhmd.sallam98@gmail.com'><BiLogoGmail className='gmail' /><span>https://mhmd.sallam98@gmail.com</span></a></li>
                    <li><a href='https://https://web.whatsapp.com/'><IoLogoWhatsapp  className='whats'/><span>+201274280288</span></a></li>
                    <li><a href='https://www.linkedin.com/in/sallam7/'><FaLinkedin className='linked' /><span>https://www.linkedin.com/in/sallam7/</span></a></li>
              </ul>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Slide>
    </div>
  )
}

export default About 