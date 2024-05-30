import React from 'react'
import "../Style/Toggle.scss"

const Toggle = ({handleChange, isChecked}) => {
  return (
    <div className='toggler'>
      <input 
        type='checkbox'
        id= "check"
        className='toggle'
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor='check'></label>
    </div>
  )
}

export default Toggle