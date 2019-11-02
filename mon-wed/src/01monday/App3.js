import React from 'react';
import "../App.css";
import PropTypes from 'prop-types';
import { names } from "./file2";

/* 3 Composing Components */

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

/*
b) In App3.js, add a new functional Component (below the Welcome Component) called WelcomePerson.
This component should take in a props param, but it should be a full person object (from the list created in step-a) 
and it should render firstName, lastName and email for this person. 

*/

function WelcomePerson(props) {
  const person = props.person;
  const { firstName, lastName, gender, email, phone } = person;

  return (
    <div>
      Firstname: <b>{firstName}</b><br />
      Lastname: <b>{lastName}</b><br />
      Email: <b>{email}</b><hr />

    </div>
  );
}

/*
  d) Add Type Checking, using Proptypes, to the Welcome component so 
  that it only accepts objects with as a minimum (required) the properties 
  firstName, lastName and email, which all must be of type String. 

  That is, all the objects given in step a) are valid, and so are these (friends will not be rendered):
  {firstName:"Kurt",lastName:"Wonnegut",email: "k@wonnegut.dk"},
  {firstName:"Kurt",lastName:"Wonnegut",email: "k@wonnegut.dk",friends:["Kim","Janne"]}

  But these should report an error (missing required values)
  {firstName:"Jane",email:"j@wonnegut.dk", phone: "12345"},
  {firstName:"Jane"},
*/

WelcomePerson.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}

/*
d) Add Type Checking, using Proptypes, to the Welcome component 
so that it only accepts a String value for name, and also ensures 
that a value always is supplied, that is, these two uses should report an error:
<Welcome />
<Welcome name={45} />
*/

Welcome.propTypes = {
  name: PropTypes.string.isRequired
}

function App() {
  return (
    <div>
      <div className="box">
        <h3>Welcome</h3>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
      <div className="box">
        <h3>WelcomePerson</h3>
        <WelcomePerson person={names[0]} />
        <WelcomePerson person={names[1]} />
        <WelcomePerson person={names[2]} />
      </div>
    </div>
  );
}


export default App;