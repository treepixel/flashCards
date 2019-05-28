import { all, takeLatest } from 'redux-saga/effects';
import {
  ADD_INITIAL_DATA_REQUEST,
  RETRIEVE_DECKS_REQUEST,
  ADD_DECK_REQUEST
} from '../actions';
import { retrieveDecks, addInitialData, addDeck } from './decks';

export default function* rootSaga() {
  yield all([
    takeLatest(ADD_INITIAL_DATA_REQUEST, addInitialData),
    takeLatest(RETRIEVE_DECKS_REQUEST, retrieveDecks),
    takeLatest(ADD_DECK_REQUEST, addDeck)
  ]);
}
