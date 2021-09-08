
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
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={e => dispatch({ type: 'name', name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>E-mail</label>
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            value={state.email}
            onChange={e => dispatch({ type: 'email', email: e.target.value })}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  )
}

export default AddContact
