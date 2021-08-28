import React from 'react'
import ContactCard from './ContactCard'

function ContactList({ contacts }) {

  return (
    <div className="ui celled list">
      {contacts.map(contact => {
        return <ContactCard contact={contact} />
      })}
    </div>
  )
}

export default ContactList