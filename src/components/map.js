// src/MapComponent.js
import React, { useState } from 'react';
import './map.css'
import { MapContainer, TileLayer, WMSTileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Panel from './panel';
import MapOptions from './mapOptions';
import { data } from './selectData';
import RapidDamageLayers from './rapidDamageLayers';


// Fix icon issue with React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapComponent = () => {
  const [showHumainLayer, setShowHumainLayer] = useState(false);
  const [showProtectedAreasLayer, setShowProtectedAreasLayer] = useState(false);
  const [showLandCoverLayer, setShowLandCoverLayer] = useState(false);
  const [showFuelsLayer, setShowFuelsLayer] =  useState(false);
  //
  const [selectedIndexOption, setSelectedIndexOption] = useState(null);
  const [isCheckedForcast, setIsCheckedForcast] = useState(true);
  const [selectedDate,setSelectedDate]=useState(new Date())
  //
  const[showActiveModis,setShowActiveModis]=useState(false)
  const[showActiveViirs,setShowActiveViirs]=useState(false)
  const[showBurntModis,setShowBurntModis]=useState(false)
  const[showBurntViirs,setShowBurntViirs]=useState(false)
  const[range,setRange]=useState()
  console.log(range)

  return (
    <div className='app-container'>
          <div className='panel-container'>
          <Panel 
            setShowHumainLayer={setShowHumainLayer}
            setShowProtectedAreasLayer={setShowProtectedAreasLayer}
            setShowLandCoverLayer={setShowLandCoverLayer}
            setShowFuelsLayer={setShowFuelsLayer}
            setSelectedIndexOption={setSelectedIndexOption}
            selectedIndexOption={selectedIndexOption}
            isCheckedForcast={isCheckedForcast}
            setIsCheckedForcast={setIsCheckedForcast}
            setSelectedDate={setSelectedDate}
            setShowActiveModis={setShowActiveModis}
            setShowActiveViirs={setShowActiveViirs}
            setShowBurntModis={setShowBurntModis}
            setShowBurntViirs={setShowBurntViirs}
            setRange={setRange}
         />
          </div>
      
        <div className='map-container'>
          <MapContainer center={[0, 0]} zoomControl={false}  zoom={2} style={{ height: '600px', width: '100%' }} crs={L.CRS.EPSG3857}>      
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          <MapOptions
            showHumainLayer={showHumainLayer}
            showProtectedAreasLayer={showProtectedAreasLayer}
            showLandCoverLayer={showLandCoverLayer}
            showFuelsLayer={showFuelsLayer}
          />

          {isCheckedForcast && data[selectedIndexOption] && <div>
          
            {data[selectedIndexOption].props.map((elm)=><WMSTileLayer
            key={Math.random()}
              {...elm}
              time={`${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`}
            />)}
          
          </div>}

          <RapidDamageLayers
          showActiveModis={showActiveModis}
          showActiveViirs={showActiveViirs}
          showBurntModis={showBurntModis}
          showBurntViirs={showBurntViirs}
          range={range}
          />
        </MapContainer>
        </div>
    </div>
  );
};

export default MapComponent;
