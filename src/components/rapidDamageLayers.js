import React from 'react'
import {WMSTileLayer} from 'react-leaflet'

const RapidDamageLayers = ({showActiveModis,showActiveViirs,showBurntModis,showBurntViirs,range}) => {
  return (
    <div>
      {showActiveModis&&<WMSTileLayer
        key={Math.random()}
        url="https://maps.effis.emergency.copernicus.eu/gwis"
        layers="modis.hs"
        format="image/png"
        transparent={true}
        version="1.1.1"
        time={range}
        srs="EPSG:3857"
        bbox="-20037508.342789244,0,0,20037508.34278071"
        width={2048}
        height={2048}
      />}

      {
        showActiveViirs && <WMSTileLayer
        key={Math.random()}
        url="https://maps.effis.emergency.copernicus.eu/gwis"
        layers="viirs.hs"
        format="image/png"
        transparent={true}
        version="1.1.1"
        time={range}
        width={2048}
        height={2048}
        srs="EPSG:3857"
        bbox="-20037508.342789244,0,0,20037508.34278071"
      />
    }
{
     showBurntModis&&<WMSTileLayer
     key={Math.random()}
     url="https://maps.effis.emergency.copernicus.eu/effis"
     layers="modis.ba"
     format="image/png"
     transparent={true}
     version="1.1.1"
     time={range}
     width={2048}
     height={2048}
     srs="EPSG:3857"
     bbox="-20037508.342789244,0,0,20037508.34278071"
   />
}
{
    showBurntViirs&&<WMSTileLayer
    key={Math.random()}
    url="https://maps.effis.emergency.copernicus.eu/gwis"
    layers="nrt.ba"
    format="image/png"
    transparent={true}
    version="1.1.1"
    time={range}
    width={2048}
    height={2048}
    srs="EPSG:3857"
    bbox="-20037508.342789244,0,0,20037508.34278071"
  />
}

    </div>
  )
}

export default RapidDamageLayers
