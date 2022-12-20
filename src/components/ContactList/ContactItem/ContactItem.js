import { Component } from 'react';

export class ContactItem extends Component {
  render() {
    const { id, name, number, onButtonDeleteClick } = this.props;

    return (
      <li key={id}>
        {name}: {number}
        <button
          onClick={() => {
            onButtonDeleteClick(id);
          }}
          type="button"
        >
          Видалить
        </button>
      </li>
    );
  }
}
