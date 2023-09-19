"use client";

import { useState } from "react";

export default function UseStateObject() {
  return (
    <>
      <UpdatingObjectInStateWithPositionExample />
      <CopyingObjectWithSpreadForm />
      <CopyingObjectWithSpreadFormSingleHandler />
      <UpdatingNestedObject />
    </>
  );
}

// state updates with client X/Y position
function UpdatingObjectInStateWithPositionExample() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <>
      <div
        onPointerMove={(e) => {
          setPosition({
            x: e.clientX,
            y: e.clientY,
          });
        }}
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "red",
            borderRadius: "50%",
            transform: `translate(${position.x}px, ${position.y}px)`,
            left: -10,
            top: -10,
            width: 20,
            height: 20,
          }}
        ></div>
      </div>
    </>
  );
}

// state updates with form & spread - copying object
function CopyingObjectWithSpreadForm() {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  function handleFirstNameChange(e: { target: { value: any } }) {
    setPerson({
      ...person,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e: { target: { value: any } }) {
    setPerson({
      ...person,
      lastName: e.target.value,
    });
  }

  function handleEmailChange(e: { target: { value: any } }) {
    setPerson({
      ...person,
      email: e.target.value,
    });
  }

  return (
    <div className="bg-white text-black flex flex-col">
      <label>
        First name:
        <input value={person.firstName} onChange={handleFirstNameChange} className="border-2" />
      </label>
      <label>
        Last name:
        <input value={person.lastName} onChange={handleLastNameChange} className="border-2" />
      </label>
      <label>
        Email:
        <input value={person.email} onChange={handleEmailChange} className="border-2" />
      </label>
      <p>
        {person.firstName} {person.lastName} {person.email}
      </p>
    </div>
  );
}

// state updates with form & spread - copying object
// single handler function using
function CopyingObjectWithSpreadFormSingleHandler() {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  function handleChange(e: { target: { name: any; value: any } }) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="bg-white text-black flex flex-col">
      <label>
        First name:
        <input name="firstName" value={person.firstName} onChange={handleChange} />
      </label>
      <label>
        Last name:
        <input name="lastName" value={person.lastName} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input name="email" value={person.email} onChange={handleChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </div>
  );
}

// updating a nested object
function UpdatingNestedObject() {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  function handleChange(e: { target: { value: any; name: any } }) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
      artwork: {
        ...person.artwork,
        [e.target.name]: e.target.value,
      },
    });
  }

  return (
    <div className="bg-white text-black mt-20">
      <label>
        Name:
        <input value={person.name} onChange={handleChange} name="name" className="border-2" />
      </label>
      <label>
        Title:
        <input
          value={person.artwork.title}
          onChange={handleChange}
          name="title"
          className="border-2"
        />
      </label>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleChange}
          name="city"
          className="border-2"
        />
      </label>
      <label>
        Image:
        <input
          value={person.artwork.image}
          onChange={handleChange}
          name="image"
          className="border-2"
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {" by "}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
    </div>
  );
}
