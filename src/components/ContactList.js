import React from 'react'
import ContactCard from './ContactCard'

function ContactList({ contacts, getContactId }) {
  const deleteContacthandler = (id) => {
    getContactId(id)
  }

  return (
    <div className="teste">
      {contacts.map(contact => {
        return <ContactCard contact={contact} clickHandler={deleteContacthandler} key={contact.id} />
      })}
    </div>
  )
}

export default ContactList
