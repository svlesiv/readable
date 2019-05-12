import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Moment from 'react-moment';

import { handleGetComments } from '../actions/comments';
import { handleDeletePost, handleUpVote, handleDownVote } from '../actions/posts';
import { sort } from '../utils/helpers';
import Header from './Header';
import EditPost from './EditPost';
import Comment from './Comment';
import CreateComment from './CreateComment';
import Sort from './Sort';

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

  handleUp = () => {
    const { dispatch, post } = this.props;
    dispatch(handleUpVote(post));
  }

  handleDown = () => {
    const { dispatch, post } = this.props;
    dispatch(handleDownVote(post));
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
              <article class="postDetail">
                <header>
                  <div>
                    <p>Votes: {post.voteScore}</p>
                    <button onClick={this.handleUp}>UP</button>
                    <button onClick={this.handleDown}>DOWN</button>
                  </div>
                  <p>Posted on <time daytime={post.timestamp}>
                    <Moment format="MM-DD-YYYY">{Math.floor(post.timestamp)}</Moment>
                    </time> by {post.author}
                  </p>
                  <h1>{post.title}</h1>
                </header>
                <div>{post.body}</div>
                <button onClick={this.handleEdit}>Edit</button>
                <button onClick={this.handleDelete}>Delete</button>
                <section>
                  <h2>Comments</h2>
                  <CreateComment post={post}/>
                  {postComments.length > 1 ? <Sort sortFor="comment"/> : null}
                 
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
  const sortedComments = sort(comments);

  const { post_id } = props.match.params;
  const index = Object.keys(posts).filter(item => posts[item].id === post_id);
  const postCommentsIndexArray = Object.keys(sortedComments).filter(item => sortedComments[item].parentId === post_id);
  const postComments = postCommentsIndexArray.map(index => sortedComments[index]);

  return {
    post_id,
    post: posts[index],
    postComments
  };
}

export default connect(mapStateToProps)(PostDetail);