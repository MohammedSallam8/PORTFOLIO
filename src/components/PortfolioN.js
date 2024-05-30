import React, { useState } from 'react'
import Cards from './Cards'
import Data from './Data'
import { Fade } from "react-awesome-reveal";
import Buttons from './Buttons';

function PortfolioN  () {

  const [item, setItems] = useState(Data)
  const menuItems = [...new Set(Data.map((val) => val.usingName))]

  const filterItems = (name) =>{
    const newItems = Data.filter((newval) => newval.usingName === name)
    setItems(newItems)
  }

  return (
      <div className="container-fluid">
        <Fade>
          <div className='row'>
            <Buttons
              menuItems={menuItems}
              filterItems={filterItems}
              setItems={setItems}
            />
            <Cards item={item}/>
          </div>
        </Fade>
      </div>
  )
}

export default PortfolioN