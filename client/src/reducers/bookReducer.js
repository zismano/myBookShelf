import {
  SEARCH_BOOK,
  ADD_BOOK,
  REMOVE_BOOK,
  CHANGE_STATUS_OF_BOOK,
  CHANGE_VIEW_OF_READ_STATUS
} from '../actions/types';

import {createBookObject} from '../../../helpers/helpers';

const initialState = {
  view: {
    read: false,
    unread: false,
    allBooks: true
  },

  items: [
    {
      id: "kotPYEqx7kM",
      isRead: true,
      volumeInfo: {
        title: "1984",
        averageRating: 4.5,
        categories: ["Fiction"],
        ratingsCount: 71,
        authors: ["George Orwell"],
        description: "bla bla bla bla",
        publishedDate: "1983-10-17",
        imageLinks: {
          thumbnail: "http://books.google.com/books/content?id=kotPYEqx7kMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
      }
    },
    {
      id: "9xy3oA",
      isRead: false,
      volumeInfo: {
        title: ["The Last Man in Europe: A Novel"],
        averageRating: 3.2,
        categories: ["Sci-Fi"],
        ratingsCount: 83,
        description: "bla bla and yet bla",
        authors: ["Dennis Glover"],
        publishedDate: "2017-11-14",
        imageLinks: {
          thumbnail: "http://books.google.com/books/content?id=E6UxDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
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
    case CHANGE_STATUS_OF_BOOK:
      newState = Object.assign({}, state);
      newState.items = newState.items.map(book => {
        if (book.id === action.payload.book.id) {
          book.isRead = action.payload.isRead;
        }
        return book;
      });
      return newState;
    case CHANGE_VIEW_OF_READ_STATUS:
      newState = Object.assign({}, state);
      newState.view = {
        read: false,
        unread: false,
        allBooks: false
      };
      newState.view[action.payload] = true;
      return newState;
    default:
      return state;
  }
}
