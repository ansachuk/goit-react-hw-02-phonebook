import { Component } from 'react';

import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export default class ContactForm extends Component {
  state = { ...INITIAL_STATE };

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
    return (
      <form onSubmit={this.props.onContactSave}>
        <label>
          Name
          <input
            value={this.state.name}
            onChange={this.props.onInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Telephone
          <input
            value={this.state.number}
            onChange={this.props.onInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
