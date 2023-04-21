import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';

class App extends Component {

  state = {
    contacts: [],
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = { id: nanoid(), name, number };

    contacts.some(contact => contact.name === name)
      ? Report.warning(
        `${name}`,
        'This user is already in the contact list.',
        'OK'
      )
      : this.setState(({ contacts }) => ({
        contacts: [newContact, ...contacts],
      }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <ContactList contacts={contacts} />
      </div>
    );
  }
};

export default App;