import { Component } from 'react';

import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class App extends Component {
  state = {
    contacts: [],
    ...INITIAL_STATE,
  };

  onContactSave = e => {
    e.preventDefault();
    const form = e.currentTarget;

    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { name: form.name.value, number: form.number.value, id: nanoid() },
        ],
        ...INITIAL_STATE,
      };
    });
  };

  onInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <h1>Phone Book</h1>
        <form onSubmit={this.onContactSave}>
          <label>
            Name
            <br />
            <input
              value={this.state.name}
              onChange={this.onInputChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <br />
          <label>
            Telephone
            <br />
            <input
              value={this.state.number}
              onChange={this.onInputChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <br />
          <button type="submit">Add contact</button>
        </form>
        <br />
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(contact => (
            <li key={contact.name}>
              {contact.name}:{contact.number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
