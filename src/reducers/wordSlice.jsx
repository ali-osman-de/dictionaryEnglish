const initialState = {
    word: null,
    loading: false,
    error: null
};

const wordReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_WORDS_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'FETCH_WORDS_SUCCESS':
            return {
                ...state,
                word: action.payload,
                loading: false,
                error: null

            };
        case 'FETCH_WORDS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default wordReducer;