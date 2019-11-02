import React from 'react';

const even = [2, 4, 6]
const odd = [3, 7, 9]
const even2 = even;
const even3 = [...even]
const all = [...even, 2000, odd, "hej", 19]

const person = { name: "Kurt", phone: "234334" };
// const name = person.name;
// const phone = person.name;
const { name, phone } = person;

const pFake = person;
const p2 = { ...person, address: "-", all: [...all] }
console.log("P2--->", p2)

console.log(even2[0])
even2[0] = 1000;
console.log(even[0])

export default function Demo() {
  return (
    <div>
      <h2>Do Something</h2>
    </div>
  )
}
