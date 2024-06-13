import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { TfiMenuAlt } from "react-icons/tfi";
import Legend from './Legend';

const RightPanel = ({
    setShowPanel,
    setShowRightPanel,
    showHumainLayer,
    showProtectedAreasLayer,
    showLandCoverLayer,
    showFuelsLayer,
    selectedIndexOption,
    isCheckedForcast,
    showActiveModis,
    showActiveViirs,
    showBurntModis,
    showBurntViirs
}) => {

    const handleClick= ()=>{
        setShowPanel(pre=>!pre)
    }
    const handleClick2= ()=>{
        setShowRightPanel(pre=>!pre)
    }
  return (
    <div className='right-panel-component'>
        <div className='right-panel-btns'>
        <button onClick={handleClick}><AiOutlineMenu /></button>
        <button onClick={handleClick2}><TfiMenuAlt /></button>
        </div>
        <div className='legend-container'>
            <Legend
             showHumainLayer={showHumainLayer}
             showProtectedAreasLayer={showProtectedAreasLayer}
             showLandCoverLayer={showLandCoverLayer}
             showFuelsLayer={showFuelsLayer}
             selectedIndexOption={selectedIndexOption}
             isCheckedForcast={isCheckedForcast}
             showActiveModis={showActiveModis}
             showActiveViirs={showActiveViirs}
             showBurntModis={showBurntModis}
             showBurntViirs={showBurntViirs}
             />
        </div>

    </div>
  )
}

export default RightPanel
