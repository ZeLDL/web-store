
const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCES',
    payload: newBooks
  };
};

const booksRequested = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_REQUESTED'
  };
};

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error
  };
};

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
                .then((data) => dispatch(booksLoaded(data)))
                .catch((error) => dispatch(booksError(error)));
}

export {
  fetchBooks
};
