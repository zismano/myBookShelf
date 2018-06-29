import {
  SEARCH_BOOK,
  ADD_BOOK,
  REMOVE_BOOK
} from '../actions/types';

import {createBookObject} from '../../../helpers/helpers';

const initialState = {
  items: [
    {
      id: "3x9ybla",
      volumeInfo: {
        title: "1984",
        authors: ["George Orwell"],
        publishedDate: "1983-10-17",
        imageLinks: {
          thumbnail: "http://books.google.com/books/content?id=kotPYEqx7kMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        status: "read"
      }
    },
    {
      id: "9xy3oA",
      volumeInfo: {
        title: ["The Last Man in Europe: A Novel"],
        authors: ["Dennis Glover"],
        publishedDate: "2017-11-14",
        imageLinks: {
          thumbnail: "http://books.google.com/books/content?id=E6UxDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        status: "unread"
      }
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
  //    let bookToAdd = createBookObject(action.payload);
  //    newState.items = state.items.concat([bookToAdd]);
      newState.items = state.items.concat([action.payload]);
      console.log(newState.items);
      return newState;

    case REMOVE_BOOK:
      newState = Object.assign({}, state);
      newState.items = newState.items.filter(book => {
        if (book.id !== action.payload.id) {
          return book;
        }
      });
      return newState;
    default:
      return state;
  }
}
