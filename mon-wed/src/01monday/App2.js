import React from "react";
import "../App.css";
import person, { males, females } from "./file2";

function App() {

  /*
    3) Implement a one-liner (using Object destructuring) 
    to initialize (only) two variables, firstName and email.
  */
  const { firstName, email } = person;

  /*
    6) Use array destructuring and the spread syntax 
    to create a few one-lines that will print out (use console.log) 
    these values (in the given order):
    ["Peter", "Jan", "Janne", "Sarah"]
    And this: 
    ["Peter", "Jan", "Kurt", "Helle", "Janne", "Sarah", "Tina"]
  */

  const all = [...males, ...females];
  console.log(all);
  console.log([...males, "Helle", ...females, "Tine"]);

  /*
    7) Use Object Destructuring and the spread syntax, 
    to create a new object personV2 from person, 
    but with two new fields: phone and friends. 
    The last one must be initialized with the values from 
    males and females (must be done as a simple one-liner).
    Console log the value, which should print something similar to this:
    email: "kurt@wonnegut.dk"
    firstName: "Kurt"
    friends: ["Peter", "Jan", "Janne", "Sarah"]
    gender: "Male"
    lastName: "Wonnegut"
    phone: 123456
  */

  // How to clone an object: const newObject = {...objectToCopy};
  const personV2 = { ...person, friends: all, phone: 123456 };
  person.friends = all;


  console.log(personV2)
  /*
  4) Add a new <p>-tag (in App2.js) , that prints firstName, email.
  */
  return (
    <div>
      <p>{firstName}</p>
      <p>{email}</p>
    </div>
  );
}

export default App;
