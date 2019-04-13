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
        [post.id]: post
      };
    case UPDATE_POST :
      const key = Object.keys(state).find(key => {
        if (state[key].id === action.post.id) {
          return key;
        }
      });
      return {
        ...state,
        [key]: action.post
      };
    default :
      return state;
  }
}