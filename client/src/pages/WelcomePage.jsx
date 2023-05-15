import React from "react";
import { useNavigate } from "react-router-dom";

import EyesComponent from "../components/EyeComponent";
import WelcomeTitle from "../components/WelcomeTitle.jsx";
import DateSelectComponent from "../components/DateSelectComponent.jsx";

const WelcomePage = () => {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate("/otd");
  };

  return (
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
        {/* <EyesComponent /> */}
      </div>
  );
};

export default WelcomePage;