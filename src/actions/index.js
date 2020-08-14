
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

export const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId
  };
};

export const bookRemoveFromCart = (bookId) => {
  return {
    type: 'BOOK_REMOVE_FROM_CART',
    payload: bookId
  };
};

export const allbookRemoveFromCart = (bookId) => {
  return {
    type: 'ALL_BOOK_REMOVE_FROM_CART',
    payload: bookId
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
