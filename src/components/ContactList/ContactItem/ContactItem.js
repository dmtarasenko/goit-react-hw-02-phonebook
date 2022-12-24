import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Item,
  DeleteButton,
} from 'components/ContactList/ContactItem/ContactItem.styled';

export class ContactItem extends Component {
  render() {
    const { id, name, number, onButtonDeleteClick } = this.props;

    return (
      <Item key={id}>
        {name}: {number}
        <DeleteButton
          onClick={() => {
            onButtonDeleteClick(id);
          }}
          type="button"
        >
          Видалить
        </DeleteButton>
      </Item>
    );
  }
}

ContactItem.propTypes = {
  onButtonDeleteClick: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
