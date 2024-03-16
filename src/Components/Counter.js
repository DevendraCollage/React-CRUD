import React, { useEffect, useState } from "react";

const Counter = () => {
  var [count, setCount] = useState(0); // Set the Initial Counter value to 0 in useState

  //? Increase Count Function
  const increaseCount = () => {
    setCount(count + 1);
  };

  //? Decrease Count Function
  const decreaseCount = () => {
    setCount(count - 1);
  };

  // This is use for increment the counter with keyboard keys
  //? Chang and apply the logic of this
  //   useEffect(() => {
  //     window.addEventListener("keypress", (event) => {
  //       if (event.key === "ArrowRight") {
  //         increaseCount();
  //       }
  //     });
  //   }, []);

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center overflow-hidden">
        <p>Counter Value : {count}</p>
      </div>
      <div className="d-flex justify-content-center align-content-center">
        <button onClick={increaseCount}>Increase Count</button>
        <button onClick={decreaseCount}>Decrease Count</button>
      </div>
    </div>
  );
};

export default Counter;
