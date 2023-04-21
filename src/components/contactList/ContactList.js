import Contact from '../contact/Contact';


const ContactList = ({ contacts }) => {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => {
                return (
                 <li key={id}>
            <Contact
              name={name}
              number={number}
              contactId={id}
            />
          </li>
             )   
            })}
        </ul>
    )
}

export default ContactList;