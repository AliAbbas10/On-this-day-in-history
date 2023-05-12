// import { welcomeReducer } from '../reducers/reducers';
// import { WelcomeContext } from '../contexts/welcomeContext';
// import { useReducer } from 'react';

// const initialWelcomeState = {
//     message: 'Hello, welcome to the Welcome Page!',
//     randomNum: Math.floor(Math.random() * 100),
// };
  
// export const WelcomeProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(welcomeReducer, initialWelcomeState);

//     const updateMessage = (newMessage, randomNum) => {
//         dispatch({ type: 'updateMessage', payload: { message: newMessage, randomNum } });
//     };

//     return (
//         <WelcomeContext.Provider value={{ ...state, updateMessage }}>
//         {children}
//         </WelcomeContext.Provider>
//     );
// };