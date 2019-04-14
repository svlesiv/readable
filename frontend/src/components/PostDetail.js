import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { handleGetComments } from '../actions/comments';
import { handleDeletePost } from '../actions/posts';
import Header from './Header';
import EditPost from './EditPost';
import Comment from './Comment';
import CreateComment from './CreateComment';

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
    const { post, postComments } = this.props;
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
                  <CreateComment post={post}/>
                  {/* list of comments */}
                  <ul>
                    {Object.keys(postComments).map(index => (
                      <li key={index}>
                        <Comment comment={postComments[index]}/>
                      </li>
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
  const index = Object.keys(posts).filter(item => posts[item].id === post_id);
  const postCommentsIndexArray = Object.keys(comments).filter(item => comments[item].parentId === post_id);
  const postComments = postCommentsIndexArray.map(index => comments[index]);

  return {
    post_id,
    post: posts[index],
    postComments
  };
}

export default connect(mapStateToProps)(PostDetail);