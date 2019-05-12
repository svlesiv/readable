import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import { handleAddPost } from '../actions/posts';
import { uuid } from '../utils/helpers';

class CreatePost extends Component {
  state = {
    title: '',
    body: '',
    author: '',
    category: 'react',
    toHome: false
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let post = {
      id: uuid(),
      timestamp: Date.now(),
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
      category: this.state.category
    }

    const { dispatch } = this.props;
    dispatch(handleAddPost(post));

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
          <legend>Create a new Post</legend>
          <input type='text' id='author' name='author' onChange={this.handleChange} value={author} placeholder="Author"/>

          <select type='text' id='category' name='category' onChange={this.handleChange} value={category}>
            <option>react</option>
            <option>redux</option>
            <option>udacity</option>
          </select>

          <input type='text' id='title' name='title' onChange={this.handleChange} value={title} placeholder="Title"/>
          <textarea type='text' id='body' name='body' onChange={this.handleChange} value={body} placeholder="Content" rows="6"/>

          <button type='submit' disabled={author === '' || category === '' || title === '' || body === '' }>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(CreatePost);