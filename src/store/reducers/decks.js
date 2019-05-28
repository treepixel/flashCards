import { RETRIEVE_DECKS_SUCCESS, ADD_DECK_SUCCESS } from '../actions';

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
    default:
      return state;
  }
}
