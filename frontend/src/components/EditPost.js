import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import '../App.css';
import Header from './Header';
import { handleUpdatePost } from '../actions/posts';

class EditPost extends Component {
  state = {
    id: this.props.post.id,
    title: this.props.post.title,
    body: this.props.post.body,
    author: this.props.post.author,
    category: this.props.post.author,
    toHome: false
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let post = {
      id: this.state.id,
      timestamp: Date.now(),
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
      category: this.state.category
    }

    const { dispatch } = this.props;
    dispatch(handleUpdatePost(post));

    this.setState({
      toHome: true
    })
  }

  render() {
    const { author, category, title, body, toHome } = this.state;

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <Header />
        <form onSubmit={this.handleSubmit}>
          <legend>Update a Post</legend>

          <label htmlFor='author'>Author</label>
          <input type='text' id='author' name='author' onChange={this.handleChange} value={author}/>

          <label htmlFor='category'></label>
          <select type='text' id='category' name='category' onChange={this.handleChange} value={category}>
            <option>react</option>
            <option>redux</option>
            <option>udacity</option>
          </select>

          <label htmlFor='title'>Title</label>
          <input type='text' id='title' name='title' onChange={this.handleChange} value={title} />

          <label htmlFor='body'>Content</label>
          <textarea type='text' id='body' name='body' onChange={this.handleChange} value={body}/>

          <button type='submit' disabled={author === '' || category === '' || title === '' || body === '' }>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(EditPost);