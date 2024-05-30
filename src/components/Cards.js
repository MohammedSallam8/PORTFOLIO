import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import { Reveal } from "react-awesome-reveal";

function Cards ({item}) {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        {item.map((val) => (
          <div key={val.id} className='col-12 col-lg-4'>
            <div className='project-item'>
              <div className='back'></div>
              <div className='card-img-top h-100'>
                <img src={val.img} alt='proj-img'  className='img'/>
              </div>
              <div className='project-background'>
                    <Slide direction="right" className="project-details">
                      <h3>{val.name}</h3>
                    </Slide>
                    <Reveal className='project-buttons'>
                      <div className='btn-container'>
                        <a className='btn-link' href={val.githubLink}><button><FaGithub className='git'/>Github</button></a>
                        <a className='btn-link' href={val.liveLink}><button><FaEye className='git' />Live</button></a>
                      </div>
                    </Reveal>
                  </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards