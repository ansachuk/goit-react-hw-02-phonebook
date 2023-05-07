import { Component } from 'react';

import { Notify } from 'notiflix';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onDeleteClick = id => {
    Notify.info('Contact has deleted!');
    return this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
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
    const { state, onInputChange, onContactSave, onDeleteClick } = this;
    return (
      <>
        <h1>Phone Book</h1>

        <ContactForm onSubmit={onContactSave}></ContactForm>
        <h2>Contacts</h2>

        <Filter onInputChange={onInputChange} filter={state.filter} />
        {state.contacts.length ? (
          <ContactList
            contacts={state.contacts}
            filter={state.filter}
            onDeleteClick={onDeleteClick}
          />
        ) : (
          <p>You have no contacts yet</p>
        )}
      </>
    );
  }
}
