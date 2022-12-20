import { Component } from 'react';

export class ContactItem extends Component {
  onButtonClick = e => {
    this.props.contactDelete(e);
  };

  render() {
    const { id, name, number } = this.props;

    return (
      <li key={id}>
        {name}: {number}
        <button onClick={this.onButtonClick} type="button">
          Видалить
        </button>
      </li>
    );
  }
}
