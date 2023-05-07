import React from 'react';

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

export default ContactList;
