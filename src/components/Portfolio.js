import React, { useState } from 'react'
import "../Style/Portfolio.scss"
import ContentHeader from './ContentHeader';
import { Fade } from "react-awesome-reveal";
import Cards from './Cards'
import Data from './Data'
import Buttons from './Buttons';


const Portfolio = () => {

  const [item, setItems] = useState(Data)
  const menuItems = [...new Set(Data.map((val) => val.usingName))]

  const filterItems = (name) =>{
    const newItems = Data.filter((newval) => newval.usingName === name)
    setItems(newItems)
  }
  return (

    <div className="main-content container">
      <ContentHeader/>
      <Fade>
      <div className='route-pages'>
        <div className='portfolio-page-container'>
          <div className='portfolio-page-content'>
            <h1 className="portfolio-title">Portfolio</h1>
            <div className="buttons-filter">
            <Buttons
              menuItems={menuItems}
              filterItems={filterItems}
              setItems={setItems}
            />
            </div>
            <div className='container-sm'>
              <div className='row'>
                <Cards item={item}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Fade>
    </div>
  )
}

export default Portfolio 