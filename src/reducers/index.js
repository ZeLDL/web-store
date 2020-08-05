const { act } = require("react-dom/test-utils");

const initialState = {
    books: []
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.paylod
            };
        default:
            return state;
    }

};

export default reducer;