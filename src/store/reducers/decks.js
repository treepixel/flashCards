import { RETRIEVE_DECKS_SUCCESS } from '../actions';

const INITIAL_STATE = {};

export default function decks(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RETRIEVE_DECKS_SUCCESS:
      return { ...action.payload.data };
    default:
      return state;
  }
}
