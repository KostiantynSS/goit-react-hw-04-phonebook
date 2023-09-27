import css from './contactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
export const ContactList = ({ onClick, contacts }) => {
  const deleteContact = data => {
    onClick(data);
  };

  return (
    <>
      <ul className={css.list}>
        {contacts.map(contact => (
          <ContactItem
            contact={contact}
            key={contact.id}
            onClick={deleteContact}
          />
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  onClick: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
