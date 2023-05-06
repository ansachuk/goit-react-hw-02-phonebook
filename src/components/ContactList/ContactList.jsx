import React from 'react';

const ContactList = ({ contacts, filter }) => {
  return (
    <ul>
      {contacts
        .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ name, number }) => (
          <li key={name}>
            {name}:{number}
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
