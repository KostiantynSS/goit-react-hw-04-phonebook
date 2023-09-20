import { Component } from 'react';
import css from './contactItem.module.css';
import PropTypes from 'prop-types';

class ContactItem extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    contact: PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    }),
  };
  deleteBtnHandler = e => {
    const contactToDelete =
      e.currentTarget.previousElementSibling.firstChild.data;
    this.props.onClick(contactToDelete);
  };
  render() {
    const { contact } = this.props;
    return (
      <li className={css.listItem}>
        <p className={css.listItemP}>
          {contact.name}: {contact.number}
        </p>
        <button className={css.listItemBtn} onClick={this.deleteBtnHandler}>
          Delete
        </button>
      </li>
    );
  }
}
export default ContactItem;
