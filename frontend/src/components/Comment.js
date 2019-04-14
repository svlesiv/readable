import React, { Component } from 'react';

class Comment extends Component {
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
      </section>
    );
  }
}

export default Comment;