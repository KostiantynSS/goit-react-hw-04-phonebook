import css from './contactItem.module.css';
import PropTypes from 'prop-types';
const ContactItem = ({ onClick, contact }) => {
  const deleteBtnHandler = e => {
    const contactToDelete =
      e.currentTarget.previousElementSibling.firstChild.data;
    onClick(contactToDelete);
  };
  return (
    <li className={css.listItem}>
      <p className={css.listItemP}>
        {contact.name}: {contact.number}
      </p>
      <button className={css.listItemBtn} onClick={deleteBtnHandler}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  onClick: PropTypes.func,
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }),
};

export default ContactItem;
