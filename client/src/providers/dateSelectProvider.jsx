import { dateSelectReducer } from '../reducers/reducers';
import { DateSelectContext } from '../contexts/dateSelectContext';
import { useReducer } from 'react';


export const DateSelectProvider = ({ children }) => {
    const [state, dispatch] = useReducer(dateSelectReducer, {
      selectedMonth: "",
      selectedDay: "",
      months : [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ]
    });
  
    return (
      <DateSelectContext.Provider value={{ state, dispatch }}>
        {children}
      </DateSelectContext.Provider>
    );
};

export default DateSelectProvider;