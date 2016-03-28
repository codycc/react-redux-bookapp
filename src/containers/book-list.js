//NOTICE: Because BookList had to be aware of state, it was place in a container folder, not component
import React, {Component} from 'react';
// import connect function from react redux, which is the glue between react and redux
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
// bind action creators is a function that makes sure the action from action creator actually ends up flowing through
// all reducers
import { bindActionCreators} from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
         key={book.title}
         onClick={() => this.props.selectBook(book)}
        className="list-group-item">
         {book.title}
        </li>
      );
    });
  }
  render() {
    return (
      <ul className = "list-group col-sm-4">
      {this.renderList()}
      </ul>
    )
  }
}
//mapstatetoprops will take in application state and set props to the component in this case its books,
//which is reffered to above in props.books
//VERY IMPORTANT FUNCTION IN REACT AND REDUX
//when application state changes, BookList will automatically re-render
function mapStateToProps(state) {
  // Whatever is returned will show up as props
  //inside of BookList
  return {
    books: state.books
  };
}

//Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  //whenever select book is called, the result should be passed
  // to all our reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote BookList from a component to a container - needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
