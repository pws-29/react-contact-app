import React from 'react'
import user from '../images/user.png'

function ContactCard(props) {
  const { id, name, email } = props.contact
  return (
    <div className="contact-card">
      <img className="contact-card-avatar" src={user} alt="user" />
      <div className="contact-card-info">
        <div className="contact-card-name">{name}</div>
        <div className="contact-card-email">{email}</div>
      </div>
      <i
        className="material-icons"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHandler(id)}
      >delete_forever</i>
    </div>
  )
}

export default ContactCard
