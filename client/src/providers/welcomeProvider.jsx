import { welcomeReducer } from '../reducers/welcomeReducer';
import { WelcomeContext } from '../contexts/welcomeContext';
import { useReducer } from 'react';

const initialWelcomeState = {
    message: 'Hello, welcome to the Welcome Page!',
    randomNum: Math.floor(Math.random() * 100),
};
  
export const WelcomeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(welcomeReducer, initialWelcomeState);

    const updateMessage = (newMessage, randomNum) => {
        dispatch({ type: 'UPDATE_MESSAGE', payload: { message: newMessage, randomNum } });
    };

    return (
        <WelcomeContext.Provider value={{ message: state.message, randomNum: state.randomNum, updateMessage }}>
        {children}
        </WelcomeContext.Provider>
    );
};