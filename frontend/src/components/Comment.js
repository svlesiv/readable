import React, { Component } from 'react';
import { connect } from 'react-redux';

import { handleDeleteComment, handleUpVoteComment, handleDownVoteComment } from '../actions/comments';
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

  handleUp = () => {
    const { dispatch, comment } = this.props;
    dispatch(handleUpVoteComment(comment));
  }

  handleDown = () => {
    const { dispatch, comment } = this.props;
    dispatch(handleDownVoteComment(comment));
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
              <div>
                <p>Votes: {comment.voteScore}</p>
                <button onClick={this.handleUp}>UP</button>
                <button onClick={this.handleDown}>DOWN</button>
              </div>
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