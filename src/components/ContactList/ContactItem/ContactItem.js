import { Component } from 'react';
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
