import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import { handleDeleteComment } from '../actions/comments';
import EditComment from './EditComment';
import VoteScoreComments from './VoteScoreComments';

class Comment extends Component {
  state = {
    isEditClick: false
  }

  handleEdit = () => {
    this.setState({isEditClick: true})
  }

  handleDelete = () => {
    const { dispatch, comment } = this.props;
    dispatch(handleDeleteComment(comment));
  }

  render() {
    const { comment } = this.props;
    const { isEditClick } = this.state;

    return (
      <div>
        {isEditClick
          ? <EditComment comment={comment}/>
          : (
          <section className="comment">
            <VoteScoreComments comment={comment}/>
            <div>
              <header className="commentHeader">
                <span>Posted on by {comment.author} <time daytime={comment.timestamp}>
                  <Moment format="MM-DD-YYYY">{comment.timestamp}</Moment></time> 
                </span>
              </header>
              <div>
                {comment.body}
              </div>
              <div className="buttonGroup">
                <button onClick={this.handleEdit}><FontAwesomeIcon icon={faPen}/></button>
                <button onClick={this.handleDelete}><FontAwesomeIcon icon={faTrash}/></button>
              </div>
            </div>
          </section>
          )}
      </div>
    );
  }
}

export default connect()(Comment);
