

const Contact = ({ name, number, onDeleteContact, contactId }) => {
  return (
    <div>
      <p>
        {name}: {number}{' '}
        <button
          type="button"
          onClick={() => onDeleteContact(contactId)}
        >Delete contact</button>
      </p>
    </div>
  );
};

export default Contact;