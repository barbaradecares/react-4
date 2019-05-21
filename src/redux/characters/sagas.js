// sagas
import { put, takeLatest, all } from 'redux-saga/effects';
import { CHARACTERS_RECEIVED, CHARACTERS_REQUEST_FAILED, GET_CHARACTERS } from './types';

function* fetchCharacters(action) {
  const URL = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=780b5dfcca61c17e93ae11e2977a4471&hash=45107b9f17137f01fa6f861d7a6d7e92${action.url ||
    ''}`;

  try {
    const json = yield fetch(URL).then(response => response.json());

    json.data.results.map(character =>
      !localStorage[character.id]
        ? localStorage.setItem(character.id, JSON.stringify(character))
        : null
    );

    yield put({ type: CHARACTERS_RECEIVED, characters: json.data.results });
  } catch (error) {
    yield put({ type: CHARACTERS_REQUEST_FAILED, error });
  }
}
function* actionWatcher() {
  yield takeLatest(GET_CHARACTERS, fetchCharacters);
}
export function* charactersSagas() {
  yield all([actionWatcher()]);
}
