/**
 * Les actions de fetch à l'API de Google
 */

import axios from 'axios'
import {
    FETCH_BOOKS_LOADING,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_ERROR 
} from '../constants'

/**
 * Au chargement de l'appel quand pas encore de réponse
 * @returns type de l'action
 */
const fetchBooksLoading = () => {
    return {
        type: FETCH_BOOKS_LOADING
    }
}

/**
 * Quand la requête est passée avec succès
 * @param {array} books
 * @returns type de l'action et la data en payload
 */
const fetchBooksSuccess = (books) => {
    return {
        type: FETCH_BOOKS_SUCCESS,
        payload: books
    }
}

/**
 * Quand la requête rencontre une erreur
 * @param {*} error 
 * @returns type de l'action et l'erreur en payload
 */
const fetchBooksError = (error) => {
    return {
        type: FETCH_BOOKS_ERROR,
        payload: error
    }
}

/**
 * Fonction asynchrone qui va être dispatchée
 * @param {string} title
 * @returns action de reponse avec data ou action d'erreur
 */
export const fetchBooks = (title) => {
    return (dispatch) => {
        // Contacter l'API
        dispatch(fetchBooksLoading())
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${process.env.GOOGLE_API_KEY}&maxResults=20`)
        // Si tout est ok, dispatch de l'action fetchBooksSuccess
        .then((res) => {
            console.log(res)
            dispatch(fetchBooksSuccess(res.data.items))
        })
        // Sinon, dispatch de l'action qui gère l'erreur fetchBooksError
        .catch((err) => {
            dispatch(fetchBooksError())
        })
    }
}