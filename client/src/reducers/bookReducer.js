import {DISPLAY_BOOKS, SEARCH_BOOK, ADD_BOOK} from '../actions/types';

const initialState = {
  items: [],
  searchResults: []  // array to render various results of searched book
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_BOOK:
      let newState = Object.assign({}, state); // tried return {...state, searchResults: action.payload}, doesn't work with webpack?
      newState.searchResults = action.payload;
      return newState;

    case ADD_BOOK:
      console.log('add reducer');
      newState = Object.assign({}, state);
      newState.items = state.items.concat([action.payload]);
      console.log(newState);
      return newState;

    default:
      return state;
  }
}
