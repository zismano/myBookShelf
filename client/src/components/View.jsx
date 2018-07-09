import React, {Component} from 'react';
import {connect} from 'react-redux';

import {changeViewOfReadStatus} from '../actions/bookActions';


class View extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <br/><br/>
        <div className="book-entry">
          <button
            className="read-button"
            onClick={() => this.props.changeViewOfReadStatus("read")}>
            Books read
          </button>
          <button
            className="unread-button"
            onClick={() => this.props.changeViewOfReadStatus("unread")}>
            Books unread
          </button>
          <button
            className="all-books-button"
            onClick={() => this.props.changeViewOfReadStatus("allBooks")}>
            All books
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, {changeViewOfReadStatus})(View);
