import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementNum, decrementNum } from "./IndexApp";

const Action = () => {
  const number = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div>
    <button></button>
      <button onClick={() => {dispatch(incrementNum())}}>+</button>
      <button onClick={() => {dispatch(decrementNum())}}>-</button>
      <h1>{number}</h1>
    </div>
  );
};

export default Action;

// useSelector: subscribes to the store and returns the selected value
// useDispatch: returns the store's dispatch function
// useStore: returns the store instance itself