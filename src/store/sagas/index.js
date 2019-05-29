import { all, takeLatest } from 'redux-saga/effects';
import {
  ADD_INITIAL_DATA_REQUEST,
  RETRIEVE_DECKS_REQUEST,
  ADD_DECK_REQUEST,
  DELETE_DECK_REQUEST,
  ADD_CARD_REQUEST,
  DELETE_CARD_REQUEST,
  MAXSCORE_REQUEST
} from '../actions';
import {
  retrieveDecks,
  addInitialData,
  addDeck,
  deleteDeck,
  addCard,
  deleteCard,
  maxScore
} from './decks';

export default function* rootSaga() {
  yield all([
    takeLatest(ADD_INITIAL_DATA_REQUEST, addInitialData),
    takeLatest(RETRIEVE_DECKS_REQUEST, retrieveDecks),
    takeLatest(ADD_DECK_REQUEST, addDeck),
    takeLatest(DELETE_DECK_REQUEST, deleteDeck),
    takeLatest(ADD_CARD_REQUEST, addCard),
    takeLatest(DELETE_CARD_REQUEST, deleteCard),
    takeLatest(MAXSCORE_REQUEST, maxScore)
  ]);
}
