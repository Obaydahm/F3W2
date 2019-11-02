import React, { useState, useEffect } from 'react';
import "../App.css";

/*
3)
  Create a simple React Component that can fetch and display a 
  Chuck Norris joke fetched from this API: https://api.chucknorris.io/  
  (use this endpoint: https://api.chucknorris.io/jokes/random) 
  whenever a button “Get ChuckNorris” is clicked.

  a) Add a feature, so that every 10 second 
  (don’t decrease this number, the risk is that they will block our IP) 
  a joke is fetched from this API: https://icanhazdadjoke.com/api.
  Hint: You need to set the accept header to get a response in your desired format, 
  Add this as the second argument to fetch (un-comment the format you prefer):
  {
     headers: {
          //Accept: 'text/plain'
          //Accept: 'application/json'
     }
  }

  b) Make sure that you don’t fetch a new Chuck Norris Joke also every 10 seconds. 
  This should only happen on a click on the button, rated: 
  Under 17 requires accompanying parent or adult guardian ;-)

  c) Ensure that the required timer for the dad jokes is cancelled when the user leaves the page.

*/

export default function App() {

  const [joke, setJoke] = useState("");
  const [dadJoke, setDadJoke] = useState("");
  const [run, setRun] = useState(false);

  function fetchNorris() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(res => res.json())
      .then(joke => setJoke(joke.value))
      .catch(err => console.log(err))
  };

  useEffect(() => {
    if (run === false) return;
    fetchDadJoke();

    const clear = setInterval(() => {
      fetchDadJoke();
    }, 10000)

    return () => {
      clearInterval(clear);
    }
  }, [run]);

  function fetchDadJoke() {
    fetch("https://icanhazdadjoke.com/slack")
      .then(res => res.json())
      .then(joke => setDadJoke(joke.attachments[0].fallback))
      .catch(err => console.log(err))
  };

  return (
    <div>
      <div className="box">
        <h3>Chuck Norris</h3>
        <p>Joke: {joke}</p>
        <button onClick={fetchNorris}>Get joke</button>
      </div>

      <div className="box">
        <h3>Dad</h3>
        <p>Joke: {dadJoke}</p>
        <button onClick={() => setRun(!run)}>Get dad joke</button>
      </div>
    </div>
  );
}