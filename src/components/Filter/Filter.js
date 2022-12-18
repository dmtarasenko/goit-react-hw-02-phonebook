import { Component } from 'react';

export class Filter extends Component {
  render() {
    const { filter, onInputChange } = this.props;

    return (
      <>
        <h3>Find contacts by name</h3>
        <input
          onChange={onInputChange}
          value={filter}
          type="text"
          name="filter"
        ></input>
      </>
    );
  }
}
