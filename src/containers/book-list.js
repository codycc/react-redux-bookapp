//NOTICE: Because BookList had to be aware of state, it was place in a container folder, not component
import React, {Component} from 'react';
// import connect function from react redux, which is the glue between react and redux
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
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
// connect takes a function and component and produces a container
export default connect(mapStateToProps)(BookList);
