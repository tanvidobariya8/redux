import React, { useState, useEffect } from "react";

const HomeEffect = () => {
  const [state, setState] = useState();

  const color = ["white", "blue", "blue"];

  const hello = color.find((ele) => ele == "blue");

  useEffect(() => {
    setState(hello);
  }, [state]);

  return (
    <div>
      {state}
    </div>
  );
};

export default HomeEffect;


