import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import EyesComponent from '../components/eyeComponent';
import DateSelectComponenet from '../components/dateSelectComponent';
import WelcomeTitle from '../components/welcomeTitle';

const WelcomePage = () => {
  const [hoverIndex, setHoverIndex] = useState(-1);

  const navigate = useNavigate();
  const title = 'ON THIS DAY IN HISTORY';

  const goToMainPage = () => {
    navigate('/otd');
  };

  return (
    <div className="welcome-page" >
      <WelcomeTitle/>
      <button onClick={goToMainPage}>On this day</button>
      <span id="orSpan" style={{fontFamily: "serif"}}> or </span>
      <span id="chooseDay" style={{fontFamily: 'serif', fontWeight: 'bold' }}> Choose a day </span>
      <div className={"dateSelector"}>
        <DateSelectComponenet/>
      </div>
      <img src={`${process.env.PUBLIC_URL}/napoleon.gif`} alt="Napoleon" className="napoleon-gif" />
      <img id="herodotus" src={`${process.env.PUBLIC_URL}/herodotus-no-eyes.png` } alt="herodotus" />
        <EyesComponent />
    </div>
  );
};


export default WelcomePage;