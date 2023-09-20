import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import Filter from './Filter/Filter';

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
  newContact = data => {
    const isExist = this.state.contacts.find(
      ({ name }) => data.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [...contacts, data],
    }));
  };
  changeFilter = data => {
    this.setState({ filter: data });
  };
  deleteContact = data => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ name }) => name !== data),
    }));
  };
  componentDidMount() {
    const contactsJson = JSON.parse(localStorage.getItem('contacts'));
    if (localStorage.getItem('contacts') && contactsJson.length > 0) {
      this.setState({ contacts: contactsJson });
    } else {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.newContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} onClick={this.deleteContact} />
      </>
    );
  }
}
