import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'

function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([]);

  const addContactHandler = contact => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
    console.log(contacts)
  };

  // Creat copy of contact list and then filter to delete a contact
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    });

    setContacts(newContactList);
  }

  // enviando e buscando itens no local storage
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) {
      setContacts(retriveContacts)
    }
  }, []) // executa apenas na montagem do componente. A ordem que está importa(??)

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts])

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
