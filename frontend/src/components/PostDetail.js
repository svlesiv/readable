import React, { Component } from 'react';
import { connect } from 'react-redux';

import { handleGetComments } from '../actions/comments';
import Header from './Header';
import EditPost from './EditPost';

class PostDetail extends Component {
  state = {
    isLoaded: false,
    isEditClick: false
  }
  componentDidMount() {
    const { dispatch, post_id } = this.props;

    dispatch(handleGetComments(post_id)).then(()=> this.setState({isLoaded: true}));
  }

  handleEdit = () => {
    this.setState({isEditClick: true})
  }

  render() {
    const { post, comments } = this.props;
    const { isLoaded, isEditClick } = this.state;

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