import React, { Component } from 'react';
import { connect } from 'react-redux';

import { handleDeleteComment } from '../actions/comments';
import EditComment from './EditComment';

class Comment extends Component {
  state = {
    isEditClick: false
  }

  handleEdit = () => {
    this.setState({isEditClick: true})
  }

  handleDelete = () => {
    const { dispatch, comment } = this.props;
    dispatch(handleDeleteComment(comment));
  }

  render() {
    const { comment } = this.props;
    const { isEditClick } = this.state;

    return (
      <div>
        {isEditClick
          ? <EditComment comment={comment}/>
          : (
          <section>
            <header>
              <p>Votes: {comment.voteScore}</p>
              <p>Posted on <time daytime={comment.timestamp}>{comment.timestamp}</time> by {comment.author}</p>
            </header>
            <div>
              {comment.body}
            </div>
            <button onClick={this.handleEdit}>Edit</button>
            <button onClick={this.handleDelete}>Delete</button>
          </section>
          )}
      </div>
    );
  }
}

export default connect()(Comment);