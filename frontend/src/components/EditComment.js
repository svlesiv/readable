import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { handleUpdateComment } from '../actions/comments';

class EditComment extends Component {
  state = {
    id: this.props.comment.id,
    parentId: this.props.comment.parentId,
    body: this.props.comment.body,
    author: this.props.comment.author
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let comment = {
      id: this.state.id,
      timestamp: Date.now(),
      parentId: this.state.parentId,
      body: this.state.body,
      author: this.state.author
    }

    const { dispatch } = this.props;
    dispatch(handleUpdateComment(comment));

    this.props.history.go(0);
  }

  render() {
    const { author, body } = this.state;

    return (
        <form onSubmit={this.handleSubmit}>
          <legend>Update a Comment</legend>

          <label htmlFor='author'>Author</label>
          <input type='text' id='author' name='author' onChange={this.handleChange} value={author}/>

          <label htmlFor='body'>Content</label>
          <textarea type='text' id='body' name='body' onChange={this.handleChange} value={body}/>

          <button type='submit' disabled={author === '' || body === '' }>
            Submit
          </button>
        </form>
    );
  }
}

export default withRouter(connect()(EditComment));