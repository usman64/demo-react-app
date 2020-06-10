import React, { useState } from 'react';
import './room.css';

function Room() {
  //const state = useState(true);
  //console.log("State = ",state);
  let [isLit, setLit] = useState(false);
  let [temp, setAge] = useState(24);

  //let hello = 'Hello '+ isLit +'World';
  //let hello = `Hello ${isLit} World`;

  return (
    <div className={`room ${isLit ? 'lit' : 'dark'}`}>
      This Room is {isLit ? 'lit' : 'dark'}
      <br />
      <button onClick={() => setLit(true)}>ON</button>
      <button onClick={() => setLit(false)}>OFF</button>
      <br />
      <br />
      {`temp: `}
      <button
        onClick={() => {
          console.log('Increase temp arrow function');
          setAge(--temp);
        }}
      >
        -
      </button>
      {temp}
      <button
        onClick={() => {
          console.log('Increase temp arrow function');
          setAge(++temp);
        }}
      >
        +
      </button>
    </div>
  );
}

export default Room;
