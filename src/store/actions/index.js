export const ADD_INITIAL_DATA_REQUEST = 'ADD_INITIAL_DATA_REQUEST';
export const RETRIEVE_DECKS_REQUEST = 'RETRIEVE_DECKS_REQUEST';
export const RETRIEVE_DECKS_SUCCESS = 'RETRIEVE_DECKS_SUCCESS';
export const ADD_DECK_REQUEST = 'ADD_DECK_REQUEST';
export const ADD_DECK_SUCCESS = 'ADD_DECK_SUCCESS';
export const DELETE_DECK_REQUEST = 'DELETE_DECK_REQUEST';
export const DELETE_DECK_SUCCESS = 'DELETE_DECK_SUCCESS';
export const ADD_CARD_REQUEST = 'ADD_CARD_REQUEST';
export const ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS';
export const DELETE_CARD_REQUEST = 'DELETE_CARD_REQUEST';
export const DELETE_CARD_SUCCESS = 'DELETE_CARD_SUCCESS';
export const MAXSCORE_REQUEST = 'MAXSCORE_REQUEST';
export const MAXSCORE_SUCCESS = 'MAXSCORE_SUCCESS';

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

export const addDeckRequest = data => ({
  type: ADD_DECK_REQUEST,
  payload: { data }
});

export const addDeckSuccess = data => ({
  type: ADD_DECK_SUCCESS,
  payload: { data }
});

export const deleteDeckRequest = id => ({
  type: DELETE_DECK_REQUEST,
  payload: { id }
});

export const deleteDeckSuccess = id => ({
  type: DELETE_DECK_SUCCESS,
  payload: { id }
});

export const addCardRequest = (data, deckId) => ({
  type: ADD_CARD_REQUEST,
  payload: { data, deckId }
});

export const addCardSuccess = (data, deckId) => ({
  type: ADD_CARD_SUCCESS,
  payload: { data, deckId }
});

export const deleteCardRequest = (id, deckId) => ({
  type: DELETE_CARD_REQUEST,
  payload: { id, deckId }
});

export const deleteCardSuccess = (id, deckId) => ({
  type: DELETE_CARD_SUCCESS,
  payload: { id, deckId }
});

export const maxScoreRequest = (score, deckId) => ({
  type: MAXSCORE_REQUEST,
  payload: { score, deckId }
});

export const maxScoreSuccess = (score, deckId) => ({
  type: MAXSCORE_SUCCESS,
  payload: { score, deckId }
});
