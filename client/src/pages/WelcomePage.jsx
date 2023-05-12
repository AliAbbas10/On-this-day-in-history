import React from "react";
import { useNavigate } from "react-router-dom";

import EyesComponent from "../components/eyeComponent";
import WelcomeTitle from "../components/welcomeTitle";
import DateSelectProvider from "../providers/dateSelectProvider";
import DateSelectComponent from "../components/dateSelectComponent";

const WelcomePage = () => {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate("/otd");
  };

  return (
    <DateSelectProvider>
      <div className="welcome-page">
        <WelcomeTitle />
        <button onClick={goToMainPage}>On this day</button>
        <span id="orSpan" style={{ fontFamily: "serif" }}>
          or
        </span>
        <span
          id="chooseDay"
          style={{ fontFamily: "serif", fontWeight: "bold" }}
        >
          Choose a day
        </span>
        <div className={"dateSelector"}>
          <DateSelectComponent />
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/napoleon.gif`}
          alt="Napoleon"
          className="napoleon-gif"
        />
        <img
          id="herodotus"
          src={`${process.env.PUBLIC_URL}/herodotus-no-eyes.png`}
          alt="herodotus"
        />
        <EyesComponent />
      </div>
    </DateSelectProvider>
  );
};

export default WelcomePage;