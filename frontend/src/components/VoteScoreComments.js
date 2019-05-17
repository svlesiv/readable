import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import { handleUpVoteComment, handleDownVoteComment } from '../actions/comments';

class VoteScore extends Component {
  handleUp = () => {
    const { dispatch, comment } = this.props;
    dispatch(handleUpVoteComment(comment));
  }
  
  handleDown = () => {
    const { dispatch, comment } = this.props;
    dispatch(handleDownVoteComment(comment));
  }
  render() {
    const { comment } = this.props;
    
    return (
      <div className="vote">
        <button onClick={this.handleUp}><FontAwesomeIcon icon={faArrowUp}/></button>
        <p>{comment.voteScore}</p>
        <button onClick={this.handleDown}><FontAwesomeIcon icon={faArrowDown}/></button>
      </div>
    )
  }
}

export default connect()(VoteScore);
