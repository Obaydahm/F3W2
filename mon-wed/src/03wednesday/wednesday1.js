import React, { useState } from "react";
import "./App.css";

/*
Forms and Controlled Components  

a)  In the project, add a new file FormDemo.js, and paste in the code below, 
    rewritten from the class-component version given here.

b)  Follow the pattern from the previous exercises and make 
    the necessary changes to index.js to render this example.

c)  Add the necessary changes, using Reacts controlled component pattern, 
    to handle the form input in the example above. If you feel this is a little bit cumbersome, 
    then just wait to see what little you have to do to make this work with a much more complex form.

d)  Open an alert box with the value provided in the text box. 
    Make sure you don’t refresh the page when you submit 
    (we are implementing single page applications).

*/

const NameForm = () => {
  const [name, setName] = useState("");

  function handleChange(event) {
    const target = event.target;
    const value = target.value;
    setName(value);

  }
  function handleSubmit(event) {
    event.preventDefault();
    window.alert(name);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label>
          Name:
          <input type="text" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {name}
    </div>
  );
};

export default function FormDemo() {
  return (
    <div style={{ marginTop: 25 }}>
      <NameForm />
    </div>
  );
}
