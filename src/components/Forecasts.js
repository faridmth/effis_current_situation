import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import {data} from './selectData';
import {ecmwfOptions,frForcastOptions} from './selectOptions'
import MyDatePicker from './MyDatePicker';
import {customStyles} from './selectStyles'
const Srcoptions = [
  { value: 'frForcast', label: 'Météo France' },
  { value: 'ECMWF', label: 'ECMWF (8 km res.)' },
];
const Forecasts = ({setSelectedIndexOption,selectedIndexOption,isCheckedForcast,setIsCheckedForcast,setSelectedDate}) => {
  const [selectedSrcOption, setSelectedSrcOption] = useState({ value: 'frForcast', label: 'Météo France' });
  const [selectedind, setSelectedind] = useState({ value: 17, label: "FWI - Indice météo des incendies (FWI)" });

  const handleChangeSrc = (option) => {
    setSelectedSrcOption(option);
    option.value=="ECMWF"?setSelectedind(ecmwfOptions[0].options[0]):setSelectedind(frForcastOptions[0])

  };
  
  const handleChangeIndex = (option) => {
    setSelectedind(option)   
    };
  const handleCheckboxChange = (event) => {
    setIsCheckedForcast(event.target.checked);
  };
  useEffect(()=>{
    setSelectedIndexOption(selectedind.value)
  },[selectedSrcOption,selectedind])

  return (
    <div className='forcast-panel'>
      <div>
        <h4>Prévisions</h4>
      </div>
      <div class='forecast-container'>
        <div className='input-cont'>
          <input
            type="checkbox"
            id="myCheckbox"
            checked={isCheckedForcast}
            onChange={handleCheckboxChange}
            />     
        </div>
        <p>Prévisions de danger d'incendie</p>
      </div>
      <div className='forcast-selection'>
        <p>Source :</p>
        <Select
          value={selectedSrcOption}
          onChange={handleChangeSrc}
          options={Srcoptions}
          styles={customStyles}
        />
      </div>
      <div className='forcast-selection'>
        <p>index :</p>
        <Select
          value={selectedind}
          onChange={handleChangeIndex}
          options={selectedSrcOption.value=="ECMWF"?ecmwfOptions:frForcastOptions}
          styles={customStyles}
        
        />
      </div>
      <div className='forcast-selection'>
        <p>Date :</p>
        <MyDatePicker setSelectedDate={setSelectedDate}/>
      </div>
    </div>

  );
};

export default Forecasts;
