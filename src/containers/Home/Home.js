import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import SearchBar from '../../components/SearchBar/SearchBar';
import CharacterList from '../../components/CharacterList/CharacterList';
import { GET_CHARACTERS } from '../../redux/characters/types';

class Home extends Component {
  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    return (
      <Fragment>
        <Nav />
        <SearchBar />
        <CharacterList />
      </Fragment>
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
)(Home);
