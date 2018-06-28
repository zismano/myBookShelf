import {DISPLAY_BOOKS, SEARCH_BOOK, ADD_BOOK} from './types';

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
