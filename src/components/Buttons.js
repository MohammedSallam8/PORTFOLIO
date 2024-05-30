import React, {useState} from 'react'
import Data from './Data'

function Buttons ({menuItems, filterItems, setItems}) {

  const [checked, setChecked] = useState("All");
  
  return (
    <div>
      <button className={checked ==="All" ? "btn-active":'btn-all'} onClick={() => setChecked('All')}>
            <span className='w-100 d-block h-100' onClick={() => setItems(Data)}>All</span>
      </button>
      {
        menuItems.map(val => (
          <button className={checked === val ? "btn-active":'btn-all'} onClick={() => setChecked(val)}>
            <span className='w-100 d-block h-100' onClick={() => filterItems(val)}>{val}</span>
          </button>
        ))
      }
    </div>
  )
}

export default Buttons