import { Component } from 'react';
import css from './filter.module.css';
import PropTypes from 'prop-types';

class Filter extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
  };
  changeFilter = e => {
    this.props.onChange(e.currentTarget.value);
  };
  render() {
    return (
      <input
        className={css.input}
        type="text"
        value={this.props.value}
        onChange={this.changeFilter}
      />
    );
  }
}

export default Filter;
