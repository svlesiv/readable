import React, { Component } from 'react';
import { connect } from 'react-redux';

import { uuid } from '../utils/helpers';
import { handleAddComment } from '../actions/comments';

class CreateComment extends Component {
  state={
    author: '',
    body: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let comment = {
      id: uuid(),
      parentId: this.props.post.id,
      timestamp: Date.now(),
      body: this.state.body,
      author: this.state.author,
    }

    const { dispatch } = this.props;
    dispatch(handleAddComment(comment));
  }

  render() {
    const { author, body } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <legend>Add a Comment</legend>
        <input type='text' id='author' name='author' onChange={this.handleChange} value={author} placeholder="Author"/>
        <textarea type='text' id='body' name='body' onChange={this.handleChange} value={body} placeholder="Comment" rows="6"/>
        <button type='submit' disabled={author === '' || body === ''}>Submit</button>
    </form>
    );
  }
}

export default connect()(CreateComment);