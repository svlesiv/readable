import { fetchPosts } from '../utils/api';

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

export function addPost (post) {
  return {
    type: ADD_POST,
    post,
  };
}

export function deletePost (post) {
  return {
    type: DELETE_POST,
    post,
  };
}

export function updatePost (post) {
  return {
    type: UPDATE_POST,
    post,
  };
}

export function handleGetPosts() {
  return (dispatch) => {
    return fetchPosts()
      .then(({ posts }) => {
        dispatch(getPosts(posts));
      });
  };
}