import { ADD_BOOK, DELETE_BOOK } from "../constants";

/**
 * Action pour ajouter un livre
 * @param data
 * @returns
 */
export const addBook = (data) => {
  // retourne action
  return { type: ADD_BOOK, payload: data /* Object */ };
};

export const deleteBook = (bookId) => {
  return { type: DELETE_BOOK, payload: bookId }
};

export default { addBook, deleteBook }