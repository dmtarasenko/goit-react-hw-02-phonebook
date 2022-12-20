import { Component } from 'react';
import { ContactItem } from 'components/ContactList/ContactItem/ContactItem';

export class ContactList extends Component {
  contactFilter = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { contacts, filter, contactDelete } = this.props;

    return (
      <ul>
        {this.contactFilter(contacts, filter).map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              name={name}
              number={number}
              contactDelete={contactDelete}
            ></ContactItem>
          );
        })}
      </ul>
    );
  }
}
