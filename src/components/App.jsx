import { Component } from 'react';

// import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Notify } from 'notiflix';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onContactSave = contactData => {
    const hasSameContactName = this.state.contacts.some(
      contact => contact.name === contactData.name
    );

    if (!hasSameContactName) {
      Notify.success('Contact has added!');
      return this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, contactData],
        };
      });
    }

    return Notify.failure(`${contactData.name} is already in contacts!`);
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
