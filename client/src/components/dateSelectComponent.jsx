import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const DateSelectComponent = () => {
    const navigate = useNavigate();
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedDay, setSelectedDay] = useState('');

    const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
    };

    const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
    };

    const goToSelectedDay = () => {
        navigate(`/otd/${selectedMonth}/${selectedDay}`);
    };
    
    const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December',
    ];

    return (
    <>
        <select
            value={selectedMonth}
            onChange={handleMonthChange}
            className={"selectMonth"}
        >
            <option value="">Select Month</option>
            {months.map((month, index) => (
            <option key={index} value={month}>{month}</option>
            ))}
        </select>
        <select
            value={selectedDay}
            onChange={handleDayChange}
            className={"selectDay"}
            >
            <option value="">Select Day</option>
            {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
            <option key={day} value={day}>{day}</option>
            ))}
        </select>
        <button id="goButton" onClick={goToSelectedDay}>Go</button>
    </>
    );
};

export default DateSelectComponent;