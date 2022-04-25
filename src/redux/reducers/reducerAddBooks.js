import { v4 as uuiv4 } from "uuid";
import { ADD_BOOKS } from "../constants";

const initialState = {
  books: [],
};

const helperAddData = (action) => {
  return {
    id: uuiv4(),
    title: action.payload.title,
    author: action.payload.author,
  };
};

// reducer
const reducerAddBooks = (
  state = initialState.books,
  action
) => {
  if (localStorage.getItem("booksData")) {
    state = JSON.parse(localStorage.getItem("booksData") || "{}");
  }

  switch (action.type) {
    case ADD_BOOKS:
      state = [...state, helperAddData(action)];
      // enregistrer une copie dans le localStorage au cas où on raffraichit la page
      localStorage.setItem("booksData", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

export default reducerAddBooks;
