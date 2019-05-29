import { call, put } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import { initialData } from '../../utils/initialData';
import NavigationService from '../../routes/NavigationService';
import {
  retrieveDecksRequest,
  retrieveDecksSuccess,
  addDeckSuccess,
  deleteDeckSuccess,
  addCardSuccess,
  deleteCardSuccess,
  maxScoreSuccess
} from '../actions';

const KEY = '@FlashcardsReactND:decks';
const FIRST_TIME_KEY = '@FlashcardsReactND:firstTime';

export function* addInitialData() {
  try {
    const data = yield call([AsyncStorage, 'getItem'], FIRST_TIME_KEY);
    const isUserFirstTime = JSON.parse(data);

    if (!isUserFirstTime) {
      yield call(
        [AsyncStorage, 'setItem'],
        FIRST_TIME_KEY,
        JSON.stringify(true)
      );

      const decks = initialData;
      yield call([AsyncStorage, 'setItem'], KEY, JSON.stringify({ ...decks }));
      yield put(retrieveDecksSuccess(decks));
    }

    yield put(retrieveDecksRequest());
  } catch (err) {}
}

export function* retrieveDecks() {
  try {
    const data = yield call([AsyncStorage, 'getItem'], KEY);
    const decks = JSON.parse(data);

    yield put(retrieveDecksSuccess(decks));
  } catch (err) {}
}

export function* addDeck(action) {
  const deck = action.payload.data;
  const { id } = deck;

  try {
    const data = yield call([AsyncStorage, 'getItem'], KEY);
    const decks = JSON.parse(data) || {};

    yield call(
      [AsyncStorage, 'setItem'],
      KEY,
      JSON.stringify({ ...decks, [id]: { ...deck } })
    );

    yield put(addDeckSuccess(deck));

    yield NavigationService.navigate('ViewDeck', { deckId: id });
  } catch (e) {
    console.log(e);
  }
}

export function* deleteDeck(action) {
  const { id } = action.payload;

  try {
    const data = yield call([AsyncStorage, 'getItem'], KEY);
    const decks = JSON.parse(data) || {};

    const newDecks = { ...decks };
    delete newDecks[id];

    yield call([AsyncStorage, 'setItem'], KEY, JSON.stringify({ ...newDecks }));

    yield put(deleteDeckSuccess(id));

    yield NavigationService.navigate('Home');
  } catch (e) {
    console.log(e);
  }
}

export function* addCard(action) {
  const card = action.payload.data;
  const { deckId } = action.payload;

  try {
    const data = yield call([AsyncStorage, 'getItem'], KEY);
    const decks = JSON.parse(data) || {};

    yield call(
      [AsyncStorage, 'setItem'],
      KEY,
      JSON.stringify({
        ...decks,
        [deckId]: { ...decks[deckId], cards: [card, ...decks[deckId].cards] }
      })
    );

    yield put(addCardSuccess(card, deckId));

    yield NavigationService.navigate('ViewDeck', { deckId });
  } catch (e) {
    console.log(e);
  }
}

export function* deleteCard(action) {
  const { id, deckId } = action.payload;

  try {
    const data = yield call([AsyncStorage, 'getItem'], KEY);
    const decks = JSON.parse(data) || {};

    const newState = {
      ...decks,
      [deckId]: {
        ...decks[deckId],
        cards: [...decks[deckId].cards.filter(card => card.id !== id)]
      }
    };

    yield call([AsyncStorage, 'setItem'], KEY, JSON.stringify({ ...newState }));

    yield put(deleteCardSuccess(id, deckId));
  } catch (e) {
    console.log(e);
  }
}

export function* maxScore(action) {
  const { score, deckId } = action.payload;

  try {
    const data = yield call([AsyncStorage, 'getItem'], KEY);
    const decks = JSON.parse(data) || {};

    yield call(
      [AsyncStorage, 'setItem'],
      KEY,
      JSON.stringify({
        ...decks,
        [deckId]: {
          ...decks[deckId],
          maxScore:
            score > decks[deckId].maxScore ? score : decks[deckId].maxScore
        }
      })
    );

    yield put(maxScoreSuccess(score, deckId));
  } catch (e) {
    console.log(e);
  }
}
