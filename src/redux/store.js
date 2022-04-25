/**
 * Gestion du store
 */

 import { combineReducers, createStore } from "redux";
 import reducerAddBooks from "./reducers/reducerAddBooks";
 
 // Combiner les reducers car on en aura plusieurs
 const rootReducer = combineReducers({
   library: reducerAddBooks,
 });
 
 // Générer le store
 const store = createStore(rootReducer);
 
 export default store;
 