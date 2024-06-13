import React, { useEffect,useState} from 'react'
import LegendElment from './LegendElment';
import {data1,data2,data3,data4} from './legendsData/map-options'
import { example1,example2,example3,example4 } from './legendsData/forcastData';
import {data} from './selectData'
import ActiveModis from './legendsData/ActiveModis';
import ActiveViirs from './legendsData/ActiveViirs';
import { burnetModis } from './legendsData/burnetModis';
import BurnetViirs from './legendsData/BurnetViirs';

const Legend = ({
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
    let group1 = [0]
    let group2 = [1,2,3,4,5]
    let group3 = [6,8,9,10,11,12,13,14,15,16,17]
    let group4 = [7]

    const [dataForcast,setDataForcast]=useState(example1)

    useEffect(() => {
        if (group1.includes(selectedIndexOption)) {
            setDataForcast(example1);
        }else if (group2.includes(selectedIndexOption)) {
            setDataForcast(example2);
        }
        else if (group3.includes(selectedIndexOption)) {
            setDataForcast(example3);
        }
        else if (group4.includes(selectedIndexOption)) {
            setDataForcast(example4);
        }
        else{
            setDataForcast([])
        }
      }, [selectedIndexOption],[])

  return (
    <div>
        <LegendElment title="Couche de l'établissement humain" control={showHumainLayer} data={data1}/>
        <LegendElment title="Couche des zones protégées" control={showProtectedAreasLayer} data={data2}/>
        <LegendElment title="Couverture terrestre de Corine" control={showLandCoverLayer} data={data3}/>
        <LegendElment title="CARBURANTS" control={showFuelsLayer} data={data4}/>
        {isCheckedForcast&&        
        <LegendElment title={data[selectedIndexOption].title} control={isCheckedForcast} data={dataForcast}/>
        }        
        {showActiveModis&&<ActiveModis/>}
        {showActiveViirs&&<ActiveViirs/>}
        <LegendElment title="Zones brûlées MODIS/SENTINEL2" control={showBurntModis} data={burnetModis}/>
        {showBurntViirs&&<BurnetViirs/>}
    </div>
  )
}

export default Legend
