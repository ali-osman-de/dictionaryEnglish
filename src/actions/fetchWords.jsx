const FETCH_WORDS_REQUEST = 'FETCH_WORDS_REQUEST';
const FETCH_WORDS_SUCCESS = 'FETCH_WORDS_SUCCESS';
const FETCH_WORDS_FAILURE = 'FETCH_WORDS_FAILURE';

const fetchWordsRequest = () => ({
    type: FETCH_WORDS_REQUEST
});

const fetchWordsSuccess = (word) => ({
    type: FETCH_WORDS_SUCCESS,
    payload: word
});

const fetchWordsFailure = (error) => ({
    type: FETCH_WORDS_FAILURE,
    payload: error
});

export const fetchWord = (wordKey) => {
    return async (dispatch) => {
        dispatch(fetchWordsRequest());
        try {

            const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordKey}`;

            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch data');

            }

            const data = await response.json();
            dispatch(fetchWordsSuccess(data));
        } catch (error) {
            dispatch(fetchWordsFailure(error.message));
        }
    };
};