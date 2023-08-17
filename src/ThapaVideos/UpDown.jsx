const initialState = {
  number:0,
};

const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCRMENT":
      return state + 1;
    case "DECREMRNT":
      return state - 1;
      default: return state
  }
};
export default changeTheNumber;
