export const welcomeReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_MESSAGE':
      return { ...state, message: action.payload.message, randomNum: action.payload.randomNum };
    default:
      return state;
  }
};