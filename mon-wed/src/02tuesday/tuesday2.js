import React, { useState, useEffect } from 'react';

/*
  2)  Create a simple React Component that can display time, 
      and update the value every second as sketched below:

      b) Make sure that the required timer, is not started until the Component is mounted (useEffect)
      c) Make sure that the timer is disabled when the component is unmounted (the user leaves the page)
      Hint: Use the effect hook with a cleanup function
*/
export default function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [run, setRun] = useState(false);

  useEffect(() => {
    if (run === false) {
      return
    }

    const clear = setInterval(() => {
      setTime(time => new Date().toLocaleTimeString())
    }, 1000)

    return () => {
      console.log("Cleaning up")
      clearInterval(clear)
    }
  }, [run])


  return (
    <div>
      <p>Time is: {time}</p>
      <button onClick={() => setRun(!run)}>Start time</button>

    </div>
  );
}