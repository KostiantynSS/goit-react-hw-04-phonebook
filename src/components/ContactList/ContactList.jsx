import { Component } from 'react';
import css from './contactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';

export class ContactList extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        number: PropTypes.string,
        id: PropTypes.string,
      })
    ),
  };
  deleteContact = data => {
    this.props.onClick(data);
  };
  render() {
    return (
      <>
        <ul className={css.list}>
          {this.props.contacts.map(contact => (
            <ContactItem
              contact={contact}
              key={contact.id}
              onClick={this.deleteContact}
            />
          ))}
        </ul>
      </>
    );
  }
}
