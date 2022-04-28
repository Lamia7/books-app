/**
 * Gestion du store
 */

 import { applyMiddleware, combineReducers, createStore } from "redux";
 import reducerAddBooks from "./reducers/reducerAddBooks";
 import reducerFetchedBooks from './reducers/reducerFetchBooks'
 import thunk from 'redux-thunk';

 // Combiner les reducers car on en aura plusieurs
 const rootReducer = combineReducers({
   library: reducerAddBooks,
   search: reducerFetchedBooks
 });
 
 // Générer le store
 const store = createStore(rootReducer, applyMiddleware(thunk));
 
 export default store;
 