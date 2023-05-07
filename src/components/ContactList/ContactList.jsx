import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, filter, onDeleteClick }) => {
  return (
    <ul>
      {contacts
        .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ name, number, id }) => (
          <li key={name}>
            {name}:{number}
            <button
              onClick={() => {
                onDeleteClick(id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default ContactList;
