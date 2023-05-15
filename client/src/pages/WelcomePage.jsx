console.log("import React from react");
import React from "react";
console.log("import {useNavigate} from react-router-dom");
import {useNavigate} from "react-router-dom";

// import EyesComponent from "../Components/EyeComponent";
console.log("import {WelcomeTitleComponenet} from ../Components/WelcomeTitle.jsx");
import WelcomeTitleComponenet from "../Components/WelcomeTitle.jsx";
console.log("import {DateSelect} from ../Components/DateSelectComponent.jsx");
import DateSelect from "../Components/DateSelectComponent.jsx";

const WelcomePage = () => {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate("/otd");
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