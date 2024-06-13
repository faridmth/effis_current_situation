// src/MapComponent.js
import React, { useState,useRef,useEffect  } from 'react';
import './map.css'
import { MapContainer, TileLayer, WMSTileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Panel from './panel';
import MapOptions from './mapOptions';
import { data } from './selectData';
import RapidDamageLayers from './rapidDamageLayers';
import RightPanel from './RightPanel';

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
  const [isCheckedForcast, setIsCheckedForcast] = useState(false);
  const [selectedDate,setSelectedDate]=useState(new Date())
  //
  const[showActiveModis,setShowActiveModis]=useState(false)
  const[showActiveViirs,setShowActiveViirs]=useState(false)
  const[showBurntModis,setShowBurntModis]=useState(false)
  const[showBurntViirs,setShowBurntViirs]=useState(false)
  const[range,setRange]=useState()
  // show and hide the panel
  const [showPanel,setShowPanel]=useState(true)
  const [showRightPanel,setShowRightPanel]=useState(false)
  // zoom
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);

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
              showPanel={showPanel}
            />
          </div>
      
        <div className='map-container'>
          <MapContainer 
            center={[45.8575,  8.3514]} 
            zoomControl={false} 
            zoom={5} style={{ height: '630px', width: '100%' }}
            crs={L.CRS.EPSG3857}
            ref={(mapInstance) => {
              if (mapInstance) {
                mapRef.current = mapInstance;
                setMap(mapInstance);
              }
            }}
          >      
          <TileLayer
            url="https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=d3c77f64d0504351b6650326d33b7af2"
            
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
        <div className={showRightPanel?'right-panel':"hide-right-panel"}>  
              <RightPanel 
              setShowPanel={setShowPanel} 
              setShowRightPanel={setShowRightPanel}
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
              map={map}
              />
            </div>

        </div>
        
    </div>
  );
};

export default MapComponent;
