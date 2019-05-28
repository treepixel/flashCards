import { call, put } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';

import { retrieveDecksRequest, retrieveDecksSuccess } from '../actions';
import { initialData } from '../../utils/initialData';

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
