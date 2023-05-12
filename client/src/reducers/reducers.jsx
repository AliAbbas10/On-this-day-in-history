const ACTIONS = {
  UPDATE_MESSAGE: "updateMessage",
  SET_DATA: "SET_DATA",
  SET_ERROR: "SET_ERROR",
  SET_MONTH: "SET_MONTH",
  SET_DAY: "SET_DAY"
};


export const welcomeReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_MESSAGE:
      return { ...state, message: action.payload.message, randomNum: action.payload.randomNum };
    default:
      return state;
  }
};

export const historyReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_DATA:
      return { ...state, data: action.payload };
    case ACTIONS.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const dateSelectReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_MONTH:
      return { ...state, selectedMonth: action.payload };
    case ACTIONS.SET_DAY:
      return { ...state, selectedDay: action.payload };
    default:
      return state;
  }
};