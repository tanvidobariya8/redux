import { createStore } from "redux";
import rootReducer from "./Rducer";


const store = createStore(rootReducer);
export default store;