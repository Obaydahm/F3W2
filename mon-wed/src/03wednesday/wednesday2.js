import React, { useState } from "react";
import "./App.css";

/*
Handling multiple inputs

a)  To see the real beauty of the controlled component pattern 
    create a new file FormDemoMultiple.js and paste in the code below, 
    inspired by this (class component)  example

b)  Make the necessary changes to index.js to render this example. 

c)  When you execute this example, you won’t really see something interesting, 
    since it deliberately does not have a submit button. But to demonstrate 
    that state ALWAYS holds the current value of all fields, 
    add this line just below the forms end-tag:
    <p>{JSON.stringify(reservation)}</p>

    Verify that whenever you change something in the form, 
    it is reflected in the state, which has become 
    the “single source of truth” for this control.

d)  Important! Before you continue, make sure you understand the 
    highlighted part of the code given above. Also, make sure you 
    understand how property names in state must match name (or id) for an input-field

e)  In the form, add the missing input fields to fill out the remainings of a customer. 
    Don't touch anything else in the code, this is meant to 
    demonstrate how “smart” the highlighted part of the code has made you form. 

f)  Finally, add a button below the form to submit the code. 
    Just pop up an alert box with all the values to be submitted

    Important: Don’t touch anything else in the code except the new click-handler for the button. 
    Remember, your state is the single source of truth, so you always have what you need to submit.

Answer the following questions before you continue (questions we will ask during the examination)

In a Controlled Component React state is made the "Single source of truth", so how:
  Do we ensure that input controls like text, textarea or select always presents the value found in the components state?
    answer: 

  Do we ensure that a controls state, always matches the value found in an input control?
    answer: 

What is the purpose of doing event.preventDefault() in an event handler?
  answer:   By default, when a submit button is pressed the data gets sent to the server,
            and by using preventDefault() we disable that.
  
  
What would be the effect of NOT doing event.preventDefault in a submit handler
  answer:   A request containing the input data would have been made to the server.

Why don't we want to submit the traditional way, in a single page application?
  answer:

Explain in words what it takes to implement the "Controlled Component" pattern for a form
  answer:



*/

function ReservationForm() {
  const initialValue = {
    payByCreditCard: true,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    country: ""
  };
  const [reservation, setReservation] = useState(initialValue);

  const handleSubmit = event => {
    event.preventDefault();
    window.alert(JSON.stringify(reservation));
  }

  const handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setReservation({ ...reservation, [name]: value });
  };

  return (
    <div>
      <div className="box">
        <form onSubmit={handleSubmit} onChange={handleChange}>

          <label>Pay by Credit Card: </label>
          <input
            name="payByCreditCard"
            type="checkbox"
            checked={reservation.payByCreditCard}
          />
          <br />

          <input
            name="firstName"
            value={reservation.firstName}
            placeholder="First Name"
          />
          <br />

          <input
            name="lastName"
            value={reservation.lastName}
            placeholder="Last Name"
          />
          <br />

          <input
            name="email"
            value={reservation.email}
            placeholder="Email"
          />
          <br />

          <input
            name="phone"
            value={reservation.phone}
            placeholder="Phone"
          />
          <br />

          <input
            name="street"
            value={reservation.street}
            placeholder="Street"
          />
          <br />

          <input
            name="city"
            value={reservation.city}
            placeholder="City"
          />
          <br />

          <input
            name="zip"
            value={reservation.zip}
            placeholder="Zip"
          />
          <br />

          <input
            name="country"
            value={reservation.country}
            placeholder="Country"
          />
          <br />

          <button type="submit">Submit</button>

        </form>
        <p>{JSON.stringify(reservation)}</p>
      </div>
    </div>
  );
}
export default ReservationForm;
