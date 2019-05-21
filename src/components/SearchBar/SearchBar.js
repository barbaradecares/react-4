import { connect } from 'react-redux';
import styled from '@emotion/styled';
import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import { GET_CHARACTERS } from '../../redux/characters/types';

const Field = ({ component, ...props }) => {
  return (
    <div>
      <Input {...props} />
      <Button type="submit">Go</Button>
    </div>
  );
};

const Input = styled.input`
  width: 200px;

  padding: 12px 20px;
  /* margin: 8px 0; */
  box-sizing: border-box;
  border: 2px solid red;
  margin: 20px 10px 10px 20px;
`;

const Div = styled.div`
  /* margin: 20px; */
`;

const Button = styled.button`
  border: 2px solid #f44336;
  border-radius: 30%;
  color: black;
  padding: 12px 12px;
  font-size: 12px;
  cursor: pointer;
  font-weight: bold;
  background: #f44336;
  color: white;
  &:hover {
    color: red;
    background-color: transparent;
  }
`;

class SearchBar extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    this.state.input === '' || !this.state.input
      ? this.props.getCharacters('')
      : this.props.getCharacters(`&nameStartsWith=${this.state.input}`);
  };

  render() {
    return (
      <Div>
        <form onSubmit={this.handleSubmit}>
          <Field
            name="searchform"
            placeholder="Search Characters"
            component={SearchForm}
            type="text"
            onChange={e => this.setState({ input: e.target.value })}
            data-testid="SearchBar"
            onSubmit={() => this.handleSubmit}
          />
          {/* <Button onClick={this.handleSubmit}>Go</Button> */}
        </form>
      </Div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCharacters: url => dispatch({ type: GET_CHARACTERS, url })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
