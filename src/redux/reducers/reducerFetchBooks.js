import {
    FETCH_BOOKS_LOADING,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_ERROR 
} from '../constants'

const initialStateBooks = {
	isLoading: false,
	fetchedBooks: [],
	error: ''
}

const reducerFetchedBooks = (state = initialStateBooks, action) => {
    switch (action.type) {
        case FETCH_BOOKS_LOADING: // pendant qu'on interroge l'API extern
            return {
                ...state,
                isLoading: true, // spinner
            }
        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                fetchedBooks: action.payload // données
            }
        case FETCH_BOOKS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default: return state
    }
}

export default reducerFetchedBooks;