import React from "react";
import { useState, useEffect } from "react";
import ContactList from "./ContactList";
import ContactRow from "./ContactRow";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState({});

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, []);

  if (contact === null) {
    return <div>Loading...</div>;
  }

  return (
    <div id="selected-contact">
      <h2>Contact</h2>
      <p>
        <b>Name:</b> {contact.name}
      </p>
      <p>
        <b>Email:</b> {contact.email}
      </p>
      <p>
        <b>Phone:</b> {contact.phone}
      </p>
      <div>
        <b>Address:</b>
        <p>{contact.address?.street}</p>
        <p>{contact.address?.city}</p>
        <p>{contact.address?.zipcode}</p>
      </div>
      <button
        className="return-to-contacts"
        onClick={() => {
          setSelectedContactId(null);
        }}
      >
        Return to Contact List
      </button>
    </div>
  );
}
