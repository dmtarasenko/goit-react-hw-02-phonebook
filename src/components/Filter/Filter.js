import { Component } from 'react';
import PropTypes from 'prop-types';
import { FilterInput, FilterTitle } from 'components/Filter/Filter.styled';

export class Filter extends Component {
  render() {
    const { filter, onInputChange } = this.props;

    return (
      <>
        <FilterTitle>Find contacts by name</FilterTitle>
        <FilterInput
          onChange={onInputChange}
          value={filter}
          type="text"
          name="filter"
        ></FilterInput>
      </>
    );
  }
}

Filter.propTypes = {
  onInputChange: PropTypes.func,
  filter: PropTypes.string,
};
