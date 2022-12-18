import { Component } from 'react';

export class ContactItem extends Component {
  render() {
    const { id, name, number } = this.props;
    return (
      <li key={id}>
        {name}: {number}
      </li>
    );
  }
}
