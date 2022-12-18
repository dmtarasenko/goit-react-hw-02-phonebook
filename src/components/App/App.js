import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from 'components/App/App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';

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

  createId = () => {
    const id = nanoid();
    return id;
  };

  onFormSubmit = e => {
    e.preventDefault();
    const {
      name: { name: nameContact, value: valueNameContact },
      number: { name: numberContact, value: valueNumberContact },
    } = e.target.elements;

    this.setState(({ contacts }) => ({
      contacts: [
        ...contacts,
        {
          id: this.createId,
          [nameContact]: valueNameContact,
          [numberContact]: valueNumberContact,
        },
      ],
    }));
    this.resetForm();
  };

  render() {
    const { filter } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>

        <ContactForm onFormSubmit={this.onFormSubmit}></ContactForm>

        <h2>Contacts</h2>
        <h3>Find contacts by name</h3>
        <input
          onChange={this.onInputChange}
          value={filter}
          type="text"
          name="filter"
        ></input>
        <ul>
          {this.state.contacts
            .filter(contact =>
              contact.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(contact => {
              return (
                <li key={contact.id}>
                  {contact.name}: {contact.number}
                </li>
              );
            })}
        </ul>
      </Container>
    );
  }
}
