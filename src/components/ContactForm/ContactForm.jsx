import { Component } from 'react';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export default class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = { ...INITIAL_STATE };

  onInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const {
      props: { onSubmit },
    } = this;
    const form = e.currentTarget;

    this.setState({ ...INITIAL_STATE });

    return onSubmit({
      name: form.name.value,
      number: form.number.value,
      id: nanoid(),
    });
  };

  render() {
    const {
      onFormSubmit,
      onInputChange,
      state: { name, number },
    } = this;

    return (
      <form onSubmit={onFormSubmit}>
        <label>
          Name
          <input
            value={name}
            onChange={onInputChange}
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
            value={number}
            onChange={onInputChange}
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
