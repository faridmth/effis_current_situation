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
    setRange
}) => {
  return (
    <div className='panel'>
      {true&&  <div className='map-options'>
            <h3>Options de carte</h3>
            <div className='check-box-cont'>
            <CheckBox label="Couche de l'établissement humain" name="humanLayer" handler={setShowHumainLayer}/>
            <CheckBox label="Couche des zones protégées" name="protectedAreas" handler={setShowProtectedAreasLayer}/>
            <CheckBox label="Couverture terrestre de Corine" name="landCover" handler={setShowLandCoverLayer}/>
            <CheckBox label="CARBURANTS" name="fuels" handler={setShowFuelsLayer}/>
            </div>
        </div> }  
        {true &&<div>
          <Forecasts 
            setSelectedIndexOption={setSelectedIndexOption}
            selectedIndexOption={selectedIndexOption}
            setIsCheckedForcast={setIsCheckedForcast}
            isCheckedForcast={isCheckedForcast}
            setSelectedDate={setSelectedDate}
            />  
        </div>  } 
        <div>
         <RangePicker setRange={setRange}/>
        </div>    
        <div>
          <div className="active">
            <CheckBox label='MODIS' handler={setShowActiveModis} name='activemodis'/>
            <CheckBox label='VIIRS' handler={setShowActiveViirs} name='activeviirs'/>
          </div>
          <div className="burnt">
            <CheckBox label='MODIS/SENTINEL2 (supervisé)' handler={setShowBurntModis} name='burntmodis' />
            <CheckBox label='MODIS & VIIRS NRT' handler={setShowBurntViirs} name='burntviirs'/>

          </div>
        </div>  
    </div>
  )
}

export default Panel
