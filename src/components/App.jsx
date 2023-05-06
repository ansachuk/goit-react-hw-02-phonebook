import { Component } from 'react';

import ContactForm from './ContactForm/ContactForm';

const INITIAL_STATE = {
  filter: '',
};

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    ...INITIAL_STATE,
  };

  onInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  //   <div>
  //   <h1>Phonebook</h1>
  //   <ContactForm ... />

  //   <h2>Contacts</h2>
  //   <Filter ... />
  //   <ContactList ... />
  // </div>

  render() {
    const { state, onInputChange } = this;
    return (
      <>
        <h1>Phone Book</h1>

        <ContactForm onInputChange={onInputChange}></ContactForm>
        <br />
        <h2>Contacts</h2>
        <label>
          <input
            value={state.filter}
            onChange={onInputChange}
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <ul>
          {state.contacts
            .filter(({ name }) =>
              name.toLowerCase().includes(this.state.filter.toLowerCase())
            )
            .map(({ name, number }) => (
              <li key={name}>
                {name}:{number}
              </li>
            ))}
        </ul>
      </>
    );
  }
}
