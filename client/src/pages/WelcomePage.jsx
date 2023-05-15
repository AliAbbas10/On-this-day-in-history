import React from "react";
import {useNavigate} from "react-router-dom";

// import EyesComponent from "../Components/EyeComponent";
import WelcomeTitleComponenet from "../Components/WelcomeTitle.jsx";
import DateSelect from "../Components/DateSelectComponent.jsx";

const WelcomePage = () => {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate("/");
  };

  return (
      <div className="welcome-page">
        <WelcomeTitleComponenet />
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
          <DateSelect />
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