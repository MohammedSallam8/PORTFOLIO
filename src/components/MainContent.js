import React from 'react'
import "../Style/MainContent.scss"
import ContentHeader from './ContentHeader';
import { TypeAnimation } from 'react-type-animation';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import AliceCarousel from 'react-alice-carousel';
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { Zoom } from "react-awesome-reveal";

const responsive = {
  0: { items: 3 },
  576: { items: 4 },
  768: { items: 4 },
  1024: { items: 4 },
};

const items = [
  <div className="item" data-value="1">
    <div className="item1">
      <FaReact className='skills-img react'/>
    </div>
  </div>,

  <div className="item" data-value="2">
    <div className="item1">
      <FaGit className='skills-img git'/>
    </div>
  </div>,

  <div className="item" data-value="3">
    <div className="item1">
    <SiMui className='skills-img mui'/>
    </div>
  </div>,

  <div className="item" data-value="4">
    <div className="item1">
      <FaHtml5 className='skills-img html'/>
    </div>
  </div>,

  <div className="item" data-value="5">
    <div className="item1">
    <FaCss3Alt className='skills-img css'/>
    </div>
  </div>,

  <div className="item" data-value="6">
      <div className="item1">
      <IoLogoJavascript className='skills-img js'/>
      </div>
    </div>,

  <div className="item" data-value="7">
    <div className="item1">
    <FaBootstrap className='skills-img boot'/>
    </div>
  </div>,

  <div className="item" data-value="8">
      <div className="item1">
      <FaSass className='skills-img sass'/>
      </div>
    </div>
];
const MainContent = () => {
  return (
    <div className="main-content container">
      <ContentHeader/>
      <div className='route-pages'>
        <div className='home-page-container'>
          <div className='home-page-content'>
            <Zoom>
            <h1>Mohammed Sallam</h1>
            <p className="help-desc">As a skilled frontend developer, Iam dedicated to turning ideas into innovative web application. Explore my latest projects, showcasing my expertise in React.js</p>
            <div className='typing-item'>
              <span className='iam'>Iam</span>
              <TypeAnimation
                sequence={[
                  'Software Engineer',
                  1000,
                  'Frontend Developer',
                  1000,
                ]}
                speed={50}
                style={{ fontSize: '1.2em' }}
                repeat={Infinity}
              />
            </div>
            <div className='skils-items'>
              <div className='main-skils'>
                <div className="row">
                  <div className="col-lg-12">
                    <AliceCarousel
                      autoPlay
                      activeIndex={0}
                      infinite={true}
                      responsive={responsive}
                      autoPlayInterval={1000}
                      fadeOutAnimation={false}
                      dotsDisabled={false}
                      touchTrackingEnabled={false}
                      mouseTrackingEnabled={false}
                      disableButtonsControls={true}
                      disableDotsControls={true}
                      items={items}
                    />
                  </div>
                </div>
              </div>
            </div>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent 