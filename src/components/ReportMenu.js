import React, {useState} from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const ReportMenu = () => {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    console.log(startDate)
    console.log(endDate)

    return (
        <div className='border-red-500 border'>
            <h3>
                ReportMenu
            </h3>
            <div className='mx-auto border border-red-500'>
                <div className='flex '>
                    <div>
                        <h3>Start Date</h3>
                        <DatePicker className='border border-red-500' selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        maxDate={new Date()}
                        showYearDropdown
                        scrollableMonthYearDropdown
                        // onChange={startChange}
                        />    
                    </div>
                    <div>
                        <h3>End Date</h3>
                        <DatePicker className='border border-red-500' selected={endDate} onChange={(date) => setEndDate(date)} 
                        maxDate={new Date()}                        
                        showYearDropdown                        
                        scrollableMonthYearDropdown/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReportMenu