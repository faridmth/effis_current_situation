import React from 'react'
import CheckBox from './checkBox'
import Forecasts from './Forecasts'
import RangePicker from './RangePicker'

const Panel = ({
    setShowHumainLayer,
    setShowProtectedAreasLayer,
    setShowLandCoverLayer,
    setShowFuelsLayer,
    setSelectedIndexOption,
    selectedIndexOption,
    setIsCheckedForcast,
    isCheckedForcast,
    setSelectedDate,
    setShowActiveModis,
    setShowActiveViirs,
    setShowBurntModis,
    setShowBurntViirs,
    setRange,
    showPanel
}) => {
  return (
    <div className={showPanel?'panel':'hide-panel'} id='ress-pannel'>
      <div className='map-options'>
            <h4>Options de carte</h4>
            <div className='check-box-cont'>
            <CheckBox label="Zone habitations/industries" name="humanLayer" handler={setShowHumainLayer}/>
            <CheckBox label="Zones protégées" name="protectedAreas" handler={setShowProtectedAreasLayer}/>
            <CheckBox label="Zone couverture végétale" name="landCover" handler={setShowLandCoverLayer}/>
            <CheckBox label="Matière inflammable" name="fuels" handler={setShowFuelsLayer}/>
            </div>
        </div> 
        <div>
          <Forecasts 
            setSelectedIndexOption={setSelectedIndexOption}
            selectedIndexOption={selectedIndexOption}
            setIsCheckedForcast={setIsCheckedForcast}
            isCheckedForcast={isCheckedForcast}
            setSelectedDate={setSelectedDate}
            />  
        </div>
       <div className='rapid-damage-container'>
          <h4>Dégâts causés par les incendies</h4>
        <div>
          <RangePicker setRange={setRange}/>
          </div>    
          <div>
            <div className="active-fires">
              <p>INCENDIES ACTIFS</p>
              <div>
                <CheckBox label='MODIS' handler={setShowActiveModis} name='activemodis'/>
                <CheckBox label='VIIRS' handler={setShowActiveViirs} name='activeviirs'/>
              </div>
            </div>
            <div className="burnt-areas">
             <p>ZONES BRÛLÉES</p>
             <div>
                <CheckBox label='MODIS/SENTINEL2 (supervisé)' handler={setShowBurntModis} name='burntmodis' />
                <CheckBox label='MODIS & VIIRS NRT' handler={setShowBurntViirs} name='burntviirs'/>
             </div>
            </div>
          </div>  
       </div>
    </div>
  )
}

export default Panel
