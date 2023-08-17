import { createStore } from "redux"; // Import from 'redux', not 'react-redux'
import BookReducer from "./BookReducer";

const store = createStore(BookReducer);
export default store;
