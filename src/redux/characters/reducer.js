// reducer

import {
  GET_CHARACTERS,
  SET_CHARACTER,
  CHARACTERS_RECEIVED,
  CHARACTERS_REQUEST_FAILED
} from './types';
// import { stat } from 'fs';

const initialState = { characters: [], loading: false };

const characterReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case GET_CHARACTERS:
      newState.loading = true;
      return newState;
    case CHARACTERS_RECEIVED:
      newState.characters = action.characters;
      newState.loading = false;
      return newState;
    case CHARACTERS_REQUEST_FAILED:
      newState.error = action.error;
      return newState;
    case SET_CHARACTER:
      newState.currentCharacter = action.character;
      return newState;
    default:
      return state;
  }
};

export default characterReducer;
