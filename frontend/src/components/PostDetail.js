import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import { handleGetComments } from '../actions/comments';
import { handleDeletePost } from '../actions/posts';
import { sort } from '../utils/helpers';
import Navigation from './Navigation';
import EditPost from './EditPost';
import Comment from './Comment';
import CreateComment from './CreateComment';
import Sort from './Sort';
import VoteScore from './VoteScore';

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
          <div class="grid-wrapper">
            <header>
              <Navigation />
            </header>
            <main>
              <article className="postDetail">
                <VoteScore post={post}/>
                <div>
                  <header className="postHeader">
                    <span>Posted by {post.author} on <time daytime={post.timestamp}>
                      <Moment format="MM-DD-YYYY">{post.timestamp}</Moment></time> 
                    </span>
                    <h1>{post.title}</h1>
                  </header>

                  <div>{post.body}</div>

                  <div className="buttonGroup">
                    <button onClick={this.handleEdit}><FontAwesomeIcon icon={faPen}/></button>
                    <button onClick={this.handleDelete}><FontAwesomeIcon icon={faTrash}/></button>
                  </div>

                  <section>
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
                </div>
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
