import React, { Component } from 'react';

class Review extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="review">
        Rate: <select>
          <option></option>
          <option value="1">1 (Not Recommended)</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5 (Highly Recommended)</option>
        </select>
        <br/><br/>
        Comment: <br/>
        <textarea/>
        <button className="review-button">Submit</button>
      </div>
    );
  }
}

export default Review;
