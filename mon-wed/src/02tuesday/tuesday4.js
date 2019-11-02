import React, { useState } from "react";
import "../App.css";

/*

Create a new Create-react-app project, and set it up similar to day1 
(or continue with the project created day-1)  for the following exercises. 
Skim the first part of this article for a quick intro to Lists with React and map.

1 Lists and Keys

a) Create a new JavaScript file ListDemoApp.js and paste in the code below:
b) Change index.js to use this file, similar to what you did yesterday. 
c) Change NumberList to return an unordered list which should render the numbers like this
d) Keys (Important)
e) Decompose NumberList into several components.
f) Implement a new Component NumberTable (just below the NumberList control from above).
   This control should accept a number array, similar to NumberList in its props, 
   but instead of a UL, create a table with a row for each number. 

*/

function ListItem(props) {
  const { number } = props;
  return <li>{number}</li>;
}

function TableItem(props) {
  return <tr><td>{props.number}</td></tr>;
}

function NumberList({ numbers }) {
  console.log("--NUMBERS -->", numbers)
  const listItems = numbers.map((n, i) => <ListItem key={i} number={n} />);
  return listItems;
}

function NumberTable({ numbers }) {
  return numbers.map((n, i) => <TableItem key={i} number={n} />);
}

function TableDemo(props) {
  return (
    <div>
      <h2>Tables</h2>
      <table>
        <tbody>
          <NumberTable numbers={props.numbers} />
        </tbody>
      </table>
    </div>
  )
}

function ListDemo(props) {
  console.log(props.numbers)
  return (
    <div>
      <h2>All numbers passed in via props</h2>
      <ul>
        <NumberList numbers={props.numbers} />
      </ul>
    </div>
  );
}
export default function App() {
  const [numbers] = useState([1, 2, 3, 4]);
  return (
    <div>
      <div className="box">
        <ListDemo numbers={numbers} />
      </div>

      <div className="box">
        <TableDemo numbers={numbers} />
      </div>
    </div>
  );
}
