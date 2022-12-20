import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from 'components/App/App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

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
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  contactCreate = ({ name, number }) => {
    const { contacts } = this.state;

    contacts.map(({ name }) => name.toLowerCase()).includes(name.toLowerCase())
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts } = this.prevState) => ({
          contacts: [
            ...contacts,
            {
              id: nanoid(),
              name,
              number,
            },
          ],
        }));
  };

  contactDelete = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm contactCreate={this.contactCreate}></ContactForm>
        <h2>Contacts</h2>
        <Filter filter={filter} onInputChange={this.onInputChange}></Filter>
        <ContactList
          contacts={contacts}
          filter={filter}
          onButtonDeleteClick={this.contactDelete}
        ></ContactList>
      </Container>
    );
  }
}
