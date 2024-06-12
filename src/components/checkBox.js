import React from 'react'

const CheckBox = ({label,name,handler}) => {
    const clickhandler=()=>{
        handler(pre=>!pre)
    }
  return (
    <div>
        <input type="checkbox" id={name} onChange={clickhandler}/>
        <label htmlFor={name}>{label}</label>
    </div>
  )
}

export default CheckBox
