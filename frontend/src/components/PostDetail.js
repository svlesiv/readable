import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { handleGetComments } from '../actions/comments';
import { handleDeletePost } from '../actions/posts';
import Header from './Header';
import EditPost from './EditPost';

class PostDetail extends Component {
  state = {
    isEditClick: false,
    toHome: false
  }
  componentDidMount() {
    const { dispatch, post_id } = this.props;
    dispatch(handleGetComments(post_id));
  }

  handleEdit = () => {
    this.setState({isEditClick: true})
  }
  handleDelete = () => {
    const { dispatch, post } = this.props;
    dispatch(handleDeletePost(post));

    this.setState({
      toHome: true
    });
  }

  render() {
    const { post, comments } = this.props;
    const { isEditClick, toHome } = this.state;

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div>
        {isEditClick
        ? <EditPost  post={post}/>
        : (
          <div>
            <Header />
            <main>
              <article>
                <header>
                  <p>Votes: {post.voteScore}</p>
                  <p>Posted on <time daytime={post.timestamp}>{post.timestamp}</time> by {post.author}</p>
                  <h1>{post.title}</h1>
                </header>
                <div>{post.body}</div>
                <button onClick={this.handleEdit}>Edit</button>
                <button onClick={this.handleDelete}>Delete</button>
                <section>
                  <h2>Comments</h2>
                  <ul>
                    {Object.keys(comments).map(index => (
                      <li key={index}>{comments[index].body}</li>
                    ))}
                  </ul>
                </section>
              </article>
            </main>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps ({ posts, comments }, props) {
  const { post_id } = props.match.params;
  let index = Object.keys(posts).filter(item => posts[item].id === post_id);

  return {
    post_id,
    post: posts[index],
    comments
  };
}

export default connect(mapStateToProps)(PostDetail);