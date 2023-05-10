import { historyReducer } from '../reducers/reducers';
import { HistoryContext } from '../contexts/historyContext';
import { useReducer } from 'react';
import axios from 'axios';


// const initialState = {
//     loading: false,
//     eventData: null,
//     error: null
//   };
  
  const HistoryProvider = ({ children }) => {
    const [state, dispatch] = useReducer(historyReducer, {
        data: null,
        error: null,
      });
    
      const fetchData = async (month, day) => {
        try {
          const response = await axios.get(
            `http://localhost:3001/wikipedia/${month}/${day}`
          );
          dispatch({ type: 'SET_DATA', payload: response.data });
        } catch (error) {
          console.error('Error fetching Wikipedia data:', error);
          dispatch({ type: 'SET_ERROR', payload: error });
        }
      };
    
      return (
        <HistoryContext.Provider value={{ ...state, fetchData }}>
          {children}
        </HistoryContext.Provider>
      );
  };
  
  export default HistoryProvider;