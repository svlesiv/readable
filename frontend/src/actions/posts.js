import { fetchPosts, apiAddPost, apiUpdatePost, apiDeletePost } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';

function getPosts (posts) {
  return {
    type: GET_POSTS,
    posts,
  };
}

function addPost (post) {
  return {
    type: ADD_POST,
    post,
  };
}

function deletePost (post) {
  return {
    type: DELETE_POST,
    post,
  };
}

function updatePost (post) {
  return {
    type: UPDATE_POST,
    post,
  };
}

export function handleGetPosts() {
  return (dispatch) => {
    dispatch(showLoading());
    return fetchPosts()
      .then(posts => {
        dispatch(getPosts(posts));
        dispatch(hideLoading());
      });
  };
}

export function handleAddPost(post) {
  return (dispatch) => {
    return apiAddPost(post)
      .then(post => {
        dispatch(addPost(post));
      });
  };
}

export function handleUpdatePost(post) {
  return (dispatch) => {
    return apiUpdatePost(post)
      .then(post => {
        dispatch(updatePost(post));
      });
  };
}

export function handleDeletePost(post) {
  return (dispatch) => {
    return apiDeletePost(post)
      .then(post => {
        dispatch(deletePost(post));
      });
  };
}
