import React, { useState } from "react";

const EventHandling = () => {
  let x = 10;

  const [count, setCount] = useState(10);

  const handleClick = () => {
    console.log("button was cicked ");
    x++;
    console.log(x);
    // alert ("value of x is "+x)
  };

  return (
    <div className="container">
      <h1>Event Handling</h1>
      <hr />
      <h2>click event</h2>
      <button
        className="btn btn-primary"
        onClick={(e) => {
          alert("You clicked that button");
        }}
      >
        Handle click
      </button>

      <button className="btn btn-danger" onClick={handleClick}>
        Passing Defined function
      </button>
      <h1>{x}</h1>

      <button
        class="btn btn-success"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Updating state
      </button>
      <h1>{count}</h1>

      <h2 className="mt-5">Change Event</h2>
      <div className="input-group">
        <input
          className="form-control"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <button className="btn btn-primary">send</button>
      </div>

      <input
        className="form-control mt-4"
        type="file"
        onChange={(e) => {
          console.log(e.target.files);
        }}
      />
    </div>
  );
};

export default EventHandling;
