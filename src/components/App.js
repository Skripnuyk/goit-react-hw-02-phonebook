import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';
import ContactForm from './contactForm';
import ContactList from './contactList';
import Filter from './filter';
import { GlobalStyle } from './GlobalStyled';
import { AppTitle, SecondTitle, AppWrap } from './App.styled';


class App extends Component {
  state = {
    contacts: [],
    filter: '',
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

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filtredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filtredContacts = this.filtredContacts();
    const addContact = this.addContact;
    const changeFilter = this.changeFilter;
    const deleteContact = this.deleteContact;

    return (
      <AppWrap>
        <AppTitle>Phonebook</AppTitle>
        <ContactForm onSubmit={addContact} />
        <SecondTitle>Contacts</SecondTitle>
        <Filter filter={filter} changeFilter={changeFilter} />
        <ContactList
          contacts={filtredContacts}
          onDeleteContact={deleteContact}
        />
        <GlobalStyle />
      </AppWrap>
    );
  }
};

export default App;