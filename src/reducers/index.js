import { combineReducers } from 'redux';
import  BooksReducer  from './reducer_books';
const rootReducer = combineReducers({
  //this reducer is going to add a key to our global application state called books * very important to note *
  books: BooksReducer
});

export default rootReducer;
