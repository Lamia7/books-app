import { ADD_BOOKS } from "../constants";

/**
 * Action pour ajouter un livre
 * @param data
 * @returns
 */
const addBook = (data) => {
  // retourne action
  return { type: ADD_BOOKS, payload: data /* Object */ };
};

export default addBook;
