import React from 'react'
import LegendSquare from './LegendSquare';

const LegendElment = ({title,control,data}) => {
  return (
    <div style={{padding:"5px"}}>
       {control &&
        <div style={{overflow:'auto'}}>
            <p style={{margin:'8px 0px'}}><b>{title}</b></p>
            {
                data.map((elm)=>{
                    return <LegendSquare label={elm.label} color={elm.color}/>
                })
            }
        </div>
       }
    </div>
  )
}

export default LegendElment
