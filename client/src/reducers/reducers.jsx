const ACTIONS = {
  UPDATE_MESSAGE: "updateMessage",
  SET_DATA: "SET_DATA",
  SET_ERROR: "SET_ERROR"
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