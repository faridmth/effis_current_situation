import React, { useState } from 'react';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import fr from 'date-fns/locale/fr'; // Import French locale
import { FaRegCalendarDays } from "react-icons/fa6";

const formatDate = (date) => {
    return `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}-${(date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}-${date.getFullYear()}`;
  };
const MyDatePicker = ({setSelectedDate}) => {
    const [date, setDate] = useState(new Date());
    const [showCalendar,setShowCalendar]=useState(false)

    const handleSelect = (selectedDate) => {
        setDate(selectedDate);
        setShowCalendar(false)
        setSelectedDate(selectedDate)
    };
    const handleClick = ()=>{
        setShowCalendar(pre=>!pre)
    }
    let maxDate = new Date()
    maxDate.setDate(maxDate.getDate()+8)
    return (
        <div id='Date-cont1'>
            <FaRegCalendarDays onClick={handleClick} style={{opacity:0.7}}/>
            {
                showCalendar && (
                <Calendar
                date={date}
                onChange={handleSelect}
                locale={fr} // Add this line for French localization
                maxDate={maxDate}
            />
                )
            }
            <p>{formatDate(date)}</p>
        </div>
    );
};

export default MyDatePicker;