export const ADD_INITIAL_DATA_REQUEST = 'ADD_INITIAL_DATA_REQUEST';
export const RETRIEVE_DECKS_REQUEST = 'RETRIEVE_DECKS_REQUEST';
export const RETRIEVE_DECKS_SUCCESS = 'RETRIEVE_DECKS_SUCCESS';
export const ADD_DECK_REQUEST = 'ADD_DECK_REQUEST';
export const ADD_DECK_SUCCESS = 'ADD_DECK_SUCCESS';

export const addInitialDataRequest = () => ({
  type: ADD_INITIAL_DATA_REQUEST
});

export const retrieveDecksRequest = () => ({
  type: RETRIEVE_DECKS_REQUEST
});

export const retrieveDecksSuccess = data => ({
  type: RETRIEVE_DECKS_SUCCESS,
  payload: { data }
});

export const addDeckRequest = () => ({
  type: ADD_DECK_REQUEST
});

export const addDeckSuccess = data => ({
  type: ADD_DECK_SUCCESS,
  payload: { data }
});
