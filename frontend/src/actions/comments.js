import { fetchComments, apiAddComment, apiUpdateComment, apiDeleteComment } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const GET_COMMENTS = 'GET_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT';
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT';
export const SET_SORT_COMMENT = 'SET_SORT_COMMENT';

function getComments (comments) {
  return {
    type: GET_COMMENTS,
    comments,
  };
}

function addComment (comment) {
  return {
    type: ADD_COMMENT,
    comment,
  };
}

function deleteComment (comment) {
  return {
    type: DELETE_COMMENT,
    comment,
  };
}

function updateComment (comment) {
  return {
    type: UPDATE_COMMENT,
    comment,
  };
}
function upVoteComment (comment) {
  return {
    type: UP_VOTE_COMMENT,
    comment,
  };
}

function downVoteComment (comment) {
  return {
    type: DOWN_VOTE_COMMENT,
    comment,
  };
}

export function setSortComment (sort) {
  return {
    type: SET_SORT_COMMENT,
    sort,
  };
}

export function handleGetComments(postId) {
  return (dispatch) => {
    dispatch(showLoading());
    return fetchComments(postId)
      .then((comments) => {
        dispatch(getComments(comments));
        dispatch(hideLoading());
      });
  };
}

export function handleAddComment(comment, post) {
  return (dispatch) => {
    return apiAddComment(comment)
      .then(comment => {
        dispatch(addComment(comment));
      });
  };
}

export function handleUpdateComment(comment) {
  return (dispatch) => {
    return apiUpdateComment(comment)
      .then(comment => {
        dispatch(updateComment(comment));
      });
  };
}

export function handleDeleteComment(comment) {
  return (dispatch) => {
    return apiDeleteComment(comment)
      .then(comment => {
        dispatch(deleteComment(comment));
      });
  };
}

export function handleUpVoteComment(comment) {
  return (dispatch) => {
    return apiUpdateComment(comment)
      .then(comment => {
        dispatch(upVoteComment(comment));
      });
  };
}

export function handleDownVoteComment(comment) {
  return (dispatch) => {
    return apiUpdateComment(comment)
      .then(comment => {
        dispatch(downVoteComment(comment));
      });
  };
}
