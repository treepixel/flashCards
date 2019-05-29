import {
  RETRIEVE_DECKS_SUCCESS,
  ADD_DECK_SUCCESS,
  DELETE_DECK_SUCCESS,
  ADD_CARD_SUCCESS,
  DELETE_CARD_SUCCESS,
  MAXSCORE_SUCCESS
} from '../actions';

const INITIAL_STATE = {};

export default function decks(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RETRIEVE_DECKS_SUCCESS:
      return { ...action.payload.data };
    case ADD_DECK_SUCCESS:
      return {
        ...state,
        [action.payload.data.id]: action.payload.data
      };
    case DELETE_DECK_SUCCESS:
      const newState = { ...state };
      delete newState[action.payload.id];
      return newState;
    case ADD_CARD_SUCCESS:
      return {
        ...state,
        [action.payload.deckId]: {
          ...state[action.payload.deckId],
          cards: [action.payload.data, ...state[action.payload.deckId].cards]
        }
      };
    case DELETE_CARD_SUCCESS:
      return {
        ...state,
        [action.payload.deckId]: {
          ...state[action.payload.deckId],
          cards: [
            ...state[action.payload.deckId].cards.filter(
              card => card.id !== action.payload.id
            )
          ]
        }
      };
    case MAXSCORE_SUCCESS:
      return {
        ...state,
        [action.payload.deckId]: {
          ...state[action.payload.deckId],
          maxScore:
            action.payload.score > state[action.payload.deckId].maxScore
              ? action.payload.score
              : state[action.payload.deckId].maxScore
        }
      };
    default:
      return state;
  }
}
