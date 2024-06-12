import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import {data} from './selectData';
import {ecmwfOptions,frForcastOptions} from './selectOptions'
import MyDatePicker from './MyDatePicker';
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
    <div>
      <div>
        <h3>Prévisions</h3>
      </div>
      <div class='forecast-container'>
      <input
        type="checkbox"
        id="myCheckbox"
        checked={isCheckedForcast}
        onChange={handleCheckboxChange}
      />        
      <h3>Prévisions de danger d'incendie</h3>
      </div>
      <div>
        <h4>Source</h4>
        <Select
        value={selectedSrcOption}
          onChange={handleChangeSrc}
          options={Srcoptions}
        />
      </div>
      <div>
        <h4>index</h4>
        <Select
          value={selectedind}
          onChange={handleChangeIndex}
          options={selectedSrcOption.value=="ECMWF"?ecmwfOptions:frForcastOptions}
        />
      </div>
      <div>
        <MyDatePicker setSelectedDate={setSelectedDate}/>
      </div>
    </div>

  );
};

export default Forecasts;