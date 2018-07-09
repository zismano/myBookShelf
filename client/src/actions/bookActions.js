import {
  FETCH_BOOKS,
  FETCH_SEARCH_RESULTS,
  SEARCH_BOOK,
  ADD_BOOK,
  REMOVE_BOOK,
  CHANGE_STATUS_OF_BOOK,
  CHANGE_VIEW_OF_READ_STATUS
} from './types';

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
    return dispatch({
      type: FETCH_SEARCH_RESULTS
    })
  }
}

export function removeBook(book) {
  return function(dispatch) {
    return dispatch({
      type: REMOVE_BOOK,
      payload: book
    })
  }
}

export function changeStatusOfBook(book, isRead) {
  return function(dispatch) {
    return dispatch({
      type: CHANGE_STATUS_OF_BOOK,
      payload: {
        book,
        isRead
      }
    })
  }
}

export function changeViewOfReadStatus(status) {
  return function(dispatch) {
    return dispatch({
      type: CHANGE_VIEW_OF_READ_STATUS,
      payload: status
    })
  }
}
