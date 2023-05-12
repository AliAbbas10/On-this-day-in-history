import { createContext, useReducer } from "react";

export const HistoryContext = createContext();

export const HistoryReducer = (state, action) => {
  switch (action.type) {

    case "SET_DATA":
      return { ...state, data: action.payload };

    case "SET_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export const HistoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(HistoryReducer, {
      data: null,
      error: null,
  });
  
  const fetchData = async (month, day) => {
    try {
      const response = await fetch(
        `http://localhost:3001/wikipedia/${month}/${day}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      dispatch({ type: "SET_DATA", payload: data });
    } catch (error) {
      console.error("Error fetching Wikipedia data:", error);
      dispatch({ type: "SET_ERROR", payload: error });
    }
  };

  return (
    <HistoryContext.Provider value={{ ...state, fetchData }}>
      {children}
    </HistoryContext.Provider>
  );
};

