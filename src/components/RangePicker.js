import React, { useEffect, useState } from 'react'
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import fr from 'date-fns/locale/fr'; // Import French locale
import { setDate } from 'date-fns';
import { formatDateRange } from './functions';
import { FaRegCalendarDays } from "react-icons/fa6";



const formatDate = (date) => {
  return `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}-${(date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}-${date.getFullYear()}`;
};

const RangePicker = ({setRange}) => {

  const initialStartDate = new Date();
  initialStartDate.setDate(initialStartDate.getDate() - 1);

    const [selectionRange,setSelectionRange] = useState({startDate: initialStartDate,endDate: new Date(),key: 'selection'})
    const [showDateRangePicker,setShowDateRangePicker]=useState(false)
    useEffect(()=>{
      if(document.querySelector('.rdrDefinedRangesWrapper')){
        document.querySelector('.rdrDefinedRangesWrapper').style.display='none'
      }
      if(document.querySelector('.rdrDateDisplayWrapper')){
        document.querySelector('.rdrDateDisplayWrapper').style.display='none'
      }
    },[showDateRangePicker])
    useEffect(()=>{
      setRange(formatDateRange(selectionRange.startDate,selectionRange.endDate))
    },[selectionRange])

    const selectHandler = (e)=>{
        setSelectionRange(e.selection)
    }
    const handleClick = ()=>{
      setShowDateRangePicker(pre=>!pre)
    }
    const handleDateChange = (days) => {
      let date = new Date();
      date.setDate(date.getDate() - days); // Adjust the date by subtracting the specified number of days
      setSelectionRange({ startDate: date, endDate: new Date(), key: 'selection' });
    };
    const fireSeasonHandler = ()=>{
      const currentYear = new Date().getFullYear();
      setSelectionRange({
        startDate: new Date(currentYear, 0, 1), // January is 0-based
        endDate: new Date(currentYear, 5, 12), // June is 5-based
        key: 'selection'
    })
    console.log('hello')
    }
    
  return (
    <div className='range-picker-container'>
      <p className='select-rang-title'>Sélectionner une période</p>
      <div className='pre-selected-ranges'>
        <div className='first-row'>
          <button onClick={()=> handleDateChange(1)}>dernier jour</button>
          <button onClick={()=>handleDateChange(7)}>semaine dernière</button>
          <button onClick={()=>handleDateChange(30)}>mois dernier</button>
        </div>
        <div className='second-row'>
          <button onClick={()=>fireSeasonHandler()}>saison des incendies</button>
          <button onClick={handleClick} id='range-selection-calendar'><FaRegCalendarDays  style={{opacity:0.7}} /></button>
        </div>
      </div>
        
        {
          showDateRangePicker && (
            <DateRangePicker
            locale={fr} // Add this line for French localization
            ranges={[selectionRange]}
            onChange={selectHandler}
            moveRangeOnFirstSelection={false}
        />
          )
        }
        <p className='range-display-text'>{`Du : ${formatDate(selectionRange.startDate)} Au ${formatDate(selectionRange.endDate)}`}</p>
      </div>
  )
}

export default RangePicker
