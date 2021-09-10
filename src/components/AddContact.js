
import React, { useReducer } from 'react'

const initialState = {
  name: '',
  email: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'name':
      return {
        ...state,
        name: action.name
      };
    case 'email':
      return {
        ...state,
        email: action.email
      };
    case 'clearState':
      return initialState
    default:
      return state;
  }
}


function AddContact(props) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const add = (e) => {
    e.preventDefault();

    if (state.name === "" || state.email === "") {
      alert("All the fields are mandatory!!")
      return
    }
    props.addContactHandler(state)
    dispatch({ type: 'clearState' })
  }

  return (
    <div className="add-contact-container"> {/* ui main */}
      <h2 className="add-contact-title">Add Contact</h2>
      <form className="contact-form" onSubmit={add}> {/* ui main */}
        <div className="field">
          <label className="contact-form-label">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={e => dispatch({ type: 'name', name: e.target.value })}
            className="contact-form-input"
          />
        </div>
        <div className="field">
          <label className="contact-form-label">E-mail</label>
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            value={state.email}
            onChange={e => dispatch({ type: 'email', email: e.target.value })}
            className="contact-form-input"
          />
        </div>
        <button className="contact-form-button">Add</button>
      </form>
    </div>
  )
}

export default AddContact
