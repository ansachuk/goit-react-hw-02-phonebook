import { Component } from 'react';

import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

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

  render() {
    const { state, onInputChange, onContactSave } = this;
    return (
      <>
        <h1>Phone Book</h1>

        <ContactForm onSubmit={onContactSave}></ContactForm>
        <h2>Contacts</h2>

        <Filter onInputChange={onInputChange} filter={state.filter} />
        <ContactList contacts={state.contacts} filter={state.filter} />
      </>
    );
  }
}
