
const initialState = {
  books: [],
  loading: true,
  error: null,
  itemCart: [
    {
      id: 1,
      name: 'NewBookFromInfocigans',
      count: 5,
      total: 200
    },
    {
      id: 2,
      name: 'NewBookFromInfocigans2',
      count: 1,
      total: 100
    },
    {
      id: 3,
      name: 'NewBoo2',
      count: 1,
      total: 200
    }
  ],
  orderTotal: 500
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'FETCH_BOOKS_REQUESTED':
      return {
        ...state,
        books: [],
        loading: true,
        error: null
      };
    case 'FETCH_BOOKS_SUCCES':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      };
    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      }

    default:
      return state;
  }
};

export default reducer;
