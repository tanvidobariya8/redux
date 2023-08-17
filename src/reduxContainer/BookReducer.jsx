import { BuyBook } from "./BookTypes";

const BookReducer = (state = { numberOfBook: 20 }, action) => {
  console.log(action);
  switch (action.type) {
    case BuyBook:
      return {
        ...state,
        numberOfBook: state.numberOfBook - 1,
      };
    default:
      return state;
  }
};

export default BookReducer;
