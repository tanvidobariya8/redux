import React from "react";
import { Provider } from "react-redux";
import BookContainer from "./reduxContainer/BookContainer";
// import store from "./reduxContainer/Store";
import User from "./reduxData/User";
import Home from "./ComponentsData/Components/Home";
import HomeContainerStore from "./ComponentsData/containers/HomeContainerStore";
import HomeEffect from "./Useeffect/HomeEffect";
import Action from "./ThapaVideos/Action";
import store from "./ThapaVideos/Store";

const App = () => {
  return (
    <div>
      <h1>hello</h1>

      <Provider Store={store}>
        <Action />
      </Provider>
    </div>
  );
};

export default App;

// {
/* <Provider store={store}>
        <BookContainer />
      </Provider> */
// }
// {
/* <User data={{name:'tanvi',age:20}} /> */
// }
// {
/* <HomeContainerStore/>
   <HomeEffect/> */
// }
