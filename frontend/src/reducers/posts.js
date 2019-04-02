import { GET_POSTS, ADD_POST, DELETE_POST, UPDATE_POST } from '../actions/posts';

export default function posts (state = {}, action) {
  switch(action.type) {
    case GET_POSTS :
      const { posts } = action;
      return {
        ...state,
        ...posts,
      };
    case ADD_POST :
      const { post } = action;
      return {
        ...state,
        [post.id]: post,
      };
    default :
      return state;
  }
}