const ACTIONS = {
  UPDATE_MESSAGE: "updateMessage",

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
    case 'SET_DATA':
      return { ...state, data: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};