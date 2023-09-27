import css from './contactForm.module.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
const ContactForm = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const { name, number } = form;

    const inputContact = {
      id: nanoid(),
      name: name.value,
      number: number.value,
    };
    onSubmit(inputContact);
    form.reset();
  };
  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
export default ContactForm;
