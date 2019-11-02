import React, { useState, useEffect } from 'react';

/*
  1) Create a simple React component using the useState hook as described below

  a) It should have a button which when pressed should increment a count value, 
  initially by one, and print the result in the component.

  b) Add a new button to the Component which when pressed, should decrement the count value

  c) Change the component, so an initial value for count can be passed in via props

  c) Change the component so the value used for increments can be passed in 
    (if you pass in the number five, the count value should increment/decrement with 5 for each click)
  
  d) Add a side effect, using useEffect, that can store the count value in 
  your Browsers Local Storage so that next time the user accesses 
  the page (after having closed the browser) it will render the count value 
  used last time he visited the page

  Hint: All modern browsers include a “Local Storage” and “Session Storage” area to store values for the current user or session. Open developer tools and check as sketched here.
  The JavaScript API, used to read/write is extremely simple, you can do like this:
  localStorage.setItem("count", count);
  localStorage.getItem("count") //Returns value as a string
*/

export default function App(props) {
  const { initialValue, incrementValue } = props;
  const [count, setCount] = useState(Number(localStorage.getItem("count") || initialValue));

  const increment = () => {
    setCount(count + incrementValue);
  }

  const decrement = () => {
    setCount(count - incrementValue);
  }

  useEffect(() => {
    localStorage.setItem("count", count);
  })


  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}
