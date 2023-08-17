import React from "react";
import { useDispatch, useSelector } from "react-redux";
import purchaseBook from "./BookAction";

const BookContainer = () => {
  const noOfBooks = useSelector((state) => state.numberOfBook);
  const dispatch = useDispatch();
  console.log(dispatch);
  return (
    <div>
      <h1>BookContainer</h1>
      <h2>No of book-{noOfBooks}</h2>
      <button onClick={()=>{dispatch(purchaseBook())}}>buy book</button>
    </div>
  );
};

export default BookContainer;
