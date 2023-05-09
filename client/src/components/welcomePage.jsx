import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WelcomeContext } from '../contexts/welcomeContext';

const WelcomePage = () => {
  const { message, updateMessage } = React.useContext(WelcomeContext);
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate('/main');
  };

  const handleUpdateMessage = () => {
    const newRandomNum = Math.floor(Math.random() * 100);
    const newMessage = `Hello, welcome to the Welcome to Page ${newRandomNum}.`;
    updateMessage(newMessage, newRandomNum);
  };
  
  return (
    <div className="welcome-page">
      <h1>Welcome Page</h1>
      <p>{message}</p>
      <button onClick={handleUpdateMessage}>Update message</button>
      <button onClick={goToMainPage}>Go to Main Page</button>
    </div>
  );
};

export default WelcomePage;