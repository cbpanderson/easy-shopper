import { createStore } from 'redux';
import shoppingListReducer from './reducer.js';

  var store = createStore(shoppingListReducer);

export default store; 