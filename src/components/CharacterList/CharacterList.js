import styled from '@emotion/styled';
import React from 'react';
import { connect } from 'react-redux';
import CharacterListItem from '../CharacterListItem/CharacterListItem';
import Loading from '../../containers/Loading/Loading';

const CharacterList = ({ loading, characters }) => {
  const Div = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 20px;
    align-items: stretch;
    margin: 20px;
  `;
  if (!loading) {
    return (
      <Div>
        {characters.map(character => {
          return <CharacterListItem character={character} key={character.id} />;
        })}
      </Div>
    );
  } else {
    return <Loading />;
  }
};

function mapStateToProps(state) {
  return { loading: state.Characters.loading, characters: state.Characters.characters };
}

export default connect(mapStateToProps)(CharacterList);
