import {FETCH_BOOKS, FETCH_SEARCH_RESULTS, SEARCH_BOOK, ADD_BOOK} from './types';

const axios = require('axios');

export function searchBook(title, author) {
  return function(dispatch) {
      axios.get('/search', {
        params: {
          title,
          author
        },
      })
      .then(books => dispatch({
        type: SEARCH_BOOK,
        payload: books
      }))
  }
}

export function addBook(book) {
  return function(dispatch) {
      return dispatch({
        type: ADD_BOOK,
        payload: book
      })
  }
}

export function fetchBooks() {
  return function(dispatch) {
    return dispatch({
      type: FETCH_BOOKS,
    })
  }
}

export function fetchSearchResults() {
  return function(dispatch) {
    console.log('fetch search results');
    return dispatch({
      type: FETCH_SEARCH_RESULTS
    })
  }
}
