import {DISPLAY_BOOKS, SEARCH_BOOK, ADD_BOOK} from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
