import {DISPLAY_BOOKS, SEARCH_BOOK, ADD_BOOK} from '../actions/types';

const initialState = {
  items: [],
  item: {},
  searchedItem: []  // array to render various results of searched book
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_BOOK:
      let newState = Object.assign({}, state); // tried return {...state, searchedItem: action.payload}, doesn't work with webpack?
      newState.searchedItem = action.payload;
      return newState;
    default:
      return state;
  }
}
