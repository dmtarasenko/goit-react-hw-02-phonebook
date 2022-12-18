import { Component } from 'react';
import { ContactItem } from 'components/ContactList/ContactItem/ContactItem';

export class ContactList extends Component {
  render() {
    const { contacts, filter } = this.props;

    return (
      <ul>
        {contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(({ id, name, number }) => {
            return (
              <ContactItem key={id} name={name} number={number}></ContactItem>
            );
          })}
      </ul>
    );
  }
}
