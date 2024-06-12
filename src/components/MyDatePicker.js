import React, { useState } from 'react';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import fr from 'date-fns/locale/fr'; // Import French locale

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
            <button onClick={handleClick}>date</button>
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
        </div>
    );
};

export default MyDatePicker;