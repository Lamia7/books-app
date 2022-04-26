import { ADD_BOOK } from "../constants";

/**
 * Action pour ajouter un livre
 * @param data
 * @returns
 */
const addBook = (data) => {
  // retourne action
  return { type: ADD_BOOK, payload: data /* Object */ };
};

export default addBook;
