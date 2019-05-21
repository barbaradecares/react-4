import React from 'react';
import { withRouter } from 'react-router';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import Button from '../Button/Button';
import { SET_CHARACTER } from '../../redux/characters/types';

const CharactersListItem = props => {
  const Div = styled.div`
    border: 1px solid #ccc;
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
    background-color: white;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
  `;
  const Img = styled.img`
    max-width: 100%;
  `;
  const Text = styled.div`
    padding: 20px;
  `;

  function redirectToDetails() {
    props.assignCurrentCharacter(props.character);
    props.history.push('/details');
  }
  return (
    <Div>
      <Img src={`${props.character.thumbnail.path}.${props.character.thumbnail.extension}`} />
      <Text>
        <h1> {JSON.parse(localStorage[props.character.id]).name}</h1>
        {props.character.description === ''
          ? "There isn't a description available"
          : props.character.description}
      </Text>
      <Button onClick={redirectToDetails} text="Details" />
    </Div>
  );
};

const mapDispatchToProps = dispatch => ({
  assignCurrentCharacter: character => dispatch({ type: SET_CHARACTER, character })
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(CharactersListItem)
);
