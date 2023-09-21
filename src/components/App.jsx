import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import Filter from './Filter/Filter';

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contact')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');
  const newContact = data => {
    const isExist = contacts.find(
      ({ name }) => data.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    setContacts(contacts => [...contacts, data]);
  };
  const changeFilter = data => {
    setFilter(data);
  };
  const deleteContact = data => {
    setContacts(contacts => contacts.filter(({ name }) => name !== data));
  };

  useEffect(() => {
    localStorage.setItem('contact', JSON.stringify(contacts));
  }, [contacts]);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={newContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onClick={deleteContact} />
    </>
  );
}

export default App;
