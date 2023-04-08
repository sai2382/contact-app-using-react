import './App.css';
import React,{useState,useEffect} from 'react';
import Header from "./Header";
import AddContact from"./AddContact";
import ContactList from "./ContactList";
import {v4 as uuid} from "uuid"

function App() {
 const L = "contacts";
  const[contacts,setContacts]=useState(JSON.parse(localStorage.getItem(L)) ?? []
  );

  const addcontactHandler =(contact)=>{
    console.log(contact);
   // setContacts([...contacts ,contact]);

     setContacts([...contacts,{id :uuid(),...contact}]);
  };
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

 useEffect(()=>{
  localStorage.setItem( L,JSON.stringify(contacts));
},[contacts]);
  return (
    <div className = "ui container">
      <Header />
      <AddContact addcontactHandler={addcontactHandler} />
     <ContactList contacts={contacts} getContactId={removeContactHandler}/>

      
      </div>
  );
}

export default App;
