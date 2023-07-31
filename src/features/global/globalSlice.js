const initialState = 0;

const subTotalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SUBTOTAL":
      return action.payload;
    default:
      return state;
  }
};

export default subTotalReducer;
