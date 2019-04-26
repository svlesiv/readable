import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { handleUpVote, handleDownVote } from '../actions/posts';

class Post extends Component {
  handleUp = () => {
    const { dispatch, post } = this.props;
    dispatch(handleUpVote(post));
  }

  handleDown = () => {
    const { dispatch, post } = this.props;
    dispatch(handleDownVote(post));
  }

  render() {
    const { post } = this.props;

    return (
      <section>
        {post ? (
          <>
           <header>
              <div>
                <p>Votes: {post.voteScore}</p>
                <button onClick={this.handleUp}>UP</button>
                <button onClick={this.handleDown}>DOWN</button>
              </div>
             <p>Posted on <time daytime={post.timestamp}>{post.timestamp}</time> by {post.author}</p>
              <Link to={`/${post.category}/${post.id}`}><h1>{post.title}</h1></Link>
            </header>
            {/* todo: set max number of characters to display */}
            <p>{post.body}</p>
          </>
        ) : null}
      </section>
    );
  }
}

export default connect()(Post);