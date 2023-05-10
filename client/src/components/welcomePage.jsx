import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WelcomeContext } from '../contexts/welcomeContext';

const WelcomePage = () => {
  const { message, updateMessage } = React.useContext(WelcomeContext);
  const navigate = useNavigate();
  const [hoverIndex, setHoverIndex] = React.useState(-1);
  const title = 'ON THIS DAY IN HISTORY';

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
      <p id='welcomeMessageP'>{message}</p>
      {/* <button onClick={handleUpdateMessage}>Update message</button> */}
      <button onClick={goToMainPage}>Go to Main Page</button>
    </div>
  );
};

export default WelcomePage;