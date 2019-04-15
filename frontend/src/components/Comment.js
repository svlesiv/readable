import React, { Component } from 'react';
import { connect } from 'react-redux';

import { handleDeleteComment } from '../actions/comments';

class Comment extends Component {

  handleDelete = () => {
    const { dispatch, comment } = this.props;
    dispatch(handleDeleteComment(comment));
  }

  render() {
    const { comment } = this.props;

    return (
      <section>
        <header>
          <p>Votes: {comment.voteScore}</p>
          <p>Posted on <time daytime={comment.timestamp}>{comment.timestamp}</time> by {comment.author}</p>
        </header>
        <div>
          {comment.body}
        </div>
        <button onClick={this.handleDelete}>Delete</button>
      </section>
    );
  }
}

export default connect()(Comment);