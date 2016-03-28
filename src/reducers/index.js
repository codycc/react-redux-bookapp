import { combineReducers } from 'redux';
import  BooksReducer  from './reducer_books';
import ActiveBook from './reducer_active_book';
const rootReducer = combineReducers({
  //this reducer is going to add a key to our global application state called books * very important to note *
  books: BooksReducer,
  activeBook: ActiveBook

});

export default rootReducer;
