import { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactList/ContactItem/ContactItem';
import { List } from 'components/ContactList/ContactList.styled';

export class ContactList extends Component {
  contactFilter = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { contacts, filter, onButtonDeleteClick } = this.props;

    return (
      <List>
        {this.contactFilter(contacts, filter).map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              name={name}
              number={number}
              onButtonDeleteClick={() => {
                onButtonDeleteClick(id);
              }}
            ></ContactItem>
          );
        })}
      </List>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
  onButtonDeleteClick: PropTypes.func,
};
