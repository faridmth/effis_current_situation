import React from 'react'

const BurnetViirs = () => {
  return (
    <div>
        <p style={{marginBottom:"5px"}}><b>MODIS & VIIRS NRT</b></p>
        <div style={{display:"flex"}}>
        <svg height="16" width="28">
        <polyline points="0,19 10,2 19,14 29,2" style={{ fill: 'none', stroke: 'red', strokeWidth: 2 }} />
        </svg>
        <p style={{marginLeft:'8px'}}>Surfaces de broussailles NRT (ha.)</p>
        </div>
    </div>

  )
}

export default BurnetViirs
