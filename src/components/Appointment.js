import { Fragment } from "react"; 
import React, {useState} from 'react';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';

export default function Appointment() {
    const [value, setValue] = useState(dayjs());

    const showAppointments = () =>  { 
        let timeArrays= ['10:30', '11:00', '11:30', '12:00', '12:30']; 
        return timeArrays.map(appointment => {
            return <div className="timeslot rounded-full" >{appointment}</div>
            })
    };

    return(  
    <div className="flex popup"> 
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar 
            disablePast={true}
            views={['day']}
            onChange={(newValue) => {setValue(newValue)}}
            value={value}

        /> 
        </LocalizationProvider>
    </div>
    )

}