import { useState, useEffect } from 'react'
import './App.css'
import ContactList from "./components/ContactList.jsx"
import { dummyContacts } from "./components/ContactList.jsx"



export default function App() {
  const [contacts, setContacts] = useState(dummyContacts)
  console.log("Contacts: ", contacts)


  return (
    <>
      <ContactList />
    </>
  );
}