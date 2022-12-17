import { Component } from 'react';
import { Container } from 'components/App/App.styled';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  createId = () => nanoid();

  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
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
          id: this.createId(),
          [nameContact]: valueNameContact,
          [numberContact]: valueNumberContact,
        },
      ],
    }));
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number, filter } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <form onSubmit={this.onFormSubmit}>
          <input
            onChange={this.onInputChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <input
            onChange={this.onInputChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
        </form>

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
