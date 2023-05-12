import { createContext, useReducer } from "react";

export const DateSelectContext = createContext();

export const DateSelectReducer = (state, action) => {
  switch (action.type) {

    case "SET_MONTH":
      return { ...state, selectedMonth: action.payload };

    case "SET_DAY":
      return { ...state, selectedDay: action.payload };
      
    default:
      return state;
  }
};

export const DateSelectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DateSelectReducer, {
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

