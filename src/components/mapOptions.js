import React from 'react'
import {WMSTileLayer} from 'react-leaflet'
import {getTodayDate,getYesterdayDate} from './functions'
const MapOptions = ({
  showHumainLayer,
  showProtectedAreasLayer,
  showLandCoverLayer,
  showFuelsLayer
}) => {
  const timeRange = `${getYesterdayDate()}/${getTodayDate()}`;
  return (
    <div>
      {showHumainLayer && (
          <WMSTileLayer
          url="https://ies-ows.jrc.ec.europa.eu/gwis"
          layers="ghsl"
          format="image/png"
          transparent={true}
          singletile={false}
          service="wms"
          version="1.1.1"
          request="GetMap"
          styles=""
          srs="EPSG:4326"
          bbox={[-18.0, 27.0, 42.0, 72.0]}
          width={1600}
          height={1200}
          time=""
          opacity={0.5} // Adjust opacity as needed
        />
        )}
        {showProtectedAreasLayer&&(
        <WMSTileLayer
        url="https://maps.effis.emergency.copernicus.eu/gwis"
        layers="wdpa.poly"
        styles=""
        format="image/png"
        transparent={true}
        version="1.1.1"
        singletile={false}
        width={2048}
        height={2048}
        srs="EPSG:4326"
        bbox={[-18.0, 27.0, 42.0, 72.0]}
        opacity={0.7} // Adjust opacity as needed
        />

        )}
        {showLandCoverLayer&&(
        <WMSTileLayer
            url="https://maps.effis.emergency.copernicus.eu/gwis"
            layers="effis_clc_2020"
            styles=""
            format="image/png"
            transparent={true}
            version="1.1.1"
            singletile={false}
            map="/mnt/efs/mapfiles/effis.clc.map"
            width={2048}
            height={2048}
            srs="EPSG:4326"
            bbox={[-18.0, 27.0, 42.0, 72.0]}
            opacity={0.5} // Set opacity to 0.7
      />
      
        )}
        {showFuelsLayer&&(
            <WMSTileLayer
                url="https://ies-ows.jrc.ec.europa.eu/effis"
                layers="fuel_map"
                format="image/png"
                transparent={true}
                version="1.1.1"
                singletile={false}
                service="wms"
                request="GetMap"
                styles=""
                srs="EPSG:4326"
                bbox={[-18.0, 27.0, 42.0, 72.0]}
                width={1600}
                height={1200}
                time = {timeRange}
                opacity={0.7} // Set opacity to 1 or adjust as needed
        />
        )}
    </div>
  )
}

export default MapOptions
