import React from 'react';
import { WelcomeContext } from '../contexts/welcomeContext';

const MainPage = () => {
  const {randomNum} = React.useContext(WelcomeContext);
  return (
    <div className="main-page">
      <h1>Main Page</h1>
      <p>This is the main page {randomNum}.</p>
    </div>
  );
};

export default MainPage;