import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleGetComments } from '../actions/comments';
import Header from './Header';

class PostDetail extends Component {
  state = {
    isLoaded: false
  }
  componentDidMount() {
    const { dispatch, post_id } = this.props;

    dispatch(handleGetComments(post_id)).then(()=> this.setState({isLoaded: true}));
  }
  render() {
    const { post, comments } = this.props;
    return (
      <div>
        {!this.state.isLoaded
        ? <p>...loading</p>
        : (
          <div>
            <Header />
            <main>
              <article>
                <header>
                  <p>{post.voteScore}</p>
                  <p>{post.author} | {post.timestamp}</p>
                  <h1>{post.title}</h1>
                </header>
                <div>{post.body}</div>
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