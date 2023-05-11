import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import EyesComponent from './eyeComponent';

const WelcomePage = () => {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const navigate = useNavigate();
  const title = 'ON THIS DAY IN HISTORY';

  const goToMainPage = () => {
    navigate('/otd');
  };

  const goToSelectedDay = () => {
    navigate(`/otd/${selectedMonth}/${selectedDay}`);
  };
  
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December',
  ];

  return (
    <div className="welcome-page" >
      <div id="welcomeTitle">
        {title.split('').map((letter, index) => (
          letter === ' ' ? (
            <span key={index} className="titleSpace">&nbsp;</span>) 
            : (
            <span
              key={index}
              className={`titleLetter ${
                hoverIndex === index ? 'hovered' : ''
              } ${
                hoverIndex === index + 1 ? 'before' : ''
              } ${
                hoverIndex === index - 1 && index !== 0 ? 'next' : ''
              }`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(-1)}
            >
              {letter}
            </span>
          )
        ))}
      </div>
      <button onClick={goToMainPage}>On this day</button>
      <span id="orSpan" style={{fontFamily: "serif"}}> or </span>
      <span id="chooseDay" style={{fontFamily: 'serif', fontWeight: 'bold' }}> Choose a day </span>
      <div className={"dateSelector"}>
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
      </div>
      <img src={`${process.env.PUBLIC_URL}/napoleon.gif`} alt="Napoleon" className="napoleon-gif" />
      <img id="herodotus" src={`${process.env.PUBLIC_URL}/herodotus-no-eyes.png` } alt="herodotus" />
      <div className="eyes">
        <EyesComponent />
      </div>
    </div>
  );
};


export default WelcomePage;