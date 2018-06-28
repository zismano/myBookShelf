import {SEARCH_BOOK, ADD_BOOK} from '../actions/types';
import {createBookObject} from '../../../helpers/helpers';

const initialState = {
  items: [
    {
      title: "1984",
      author: "George Orwell",
      publishedDate: "1983-10-17",
      thumbnail: "http://books.google.com/books/content?id=kotPYEqx7kMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      status: "read"
    },
    {
      title: "The Last Man in Europe: A Novel",
      author: "Dennis Glover",
      publishedDate: "2017-11-14",
      thumbnail: "http://books.google.com/books/content?id=E6UxDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      status: "unread"
    }
  ],
  searchResults: []  // array to render various results of searched book
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_BOOK:
      let newState = Object.assign({}, state); // tried return {...state, searchResults: action.payload}, doesn't work with webpack?
      newState.searchResults = action.payload;
      return newState;

    case ADD_BOOK:
      newState = Object.assign({}, state);
      let bookToAdd = createBookObject(action.payload);
      newState.items = state.items.concat([bookToAdd]);
      return newState;

    default:
      return state;
  }
}
