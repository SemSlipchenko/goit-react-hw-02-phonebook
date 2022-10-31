const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p>{name}</p>
        <p>{number}</p>
        <button onClick={() => deleteContact(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ContactList;
