import { createContext, useReducer } from "react";

export const HistoryContext = createContext();

export const HistoryReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload, lastFetched: action.lastFetched };

    case "SET_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export const HistoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(HistoryReducer, {
    data: {
      events: [],
      births: [],
      deaths: [],
    },
    error: null,
    lastFetched: null,
  });

  const fetchData = async (month, day) => {
    console.log("fetching");
    const requestKey = `${month}_${day}`;

    if (state.lastFetched === requestKey) {
      // If data already exists for the given month and day, don't fetch it again
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3001/wikipedia/${month}/${day}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      dispatch({ type: "SET_DATA", payload: data, lastFetched: requestKey });
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



//   const fetchData = async (month, day) => {
//     try {
//       const storageKey = `history_${month}_${day}`;
//       const storedData = localStorage.getItem(storageKey);
  
//       if (storedData) {
//         dispatch({ type: "SET_DATA", payload: JSON.parse(storedData) });
//         return;
//       }
  
//       const abortController = new AbortController();
//       const response = await fetch(
//         `http://localhost:3001/wikipedia/${month}/${day}`,
//         { signal: abortController.signal }
//       );
  
//       if (!response.ok) {
//         throw new Error(`HTTP error: ${response.status}`);
//       }
  
//       const data = await response.json();
//       localStorage.setItem(storageKey, JSON.stringify(data));
//       dispatch({ type: "SET_DATA", payload: data });
//     } catch (error) {
//       if (error.name === "AbortError") {
//         console.log("Fetch aborted");
//       } else {
//         console.error("Error fetching Wikipedia data:", error);
//         dispatch({ type: "SET_ERROR", payload: error });
//       }
//     }
//   };