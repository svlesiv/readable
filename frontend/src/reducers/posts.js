import { GET_POSTS, ADD_POST, DELETE_POST, UPDATE_POST, UP_VOTE, DOWN_VOTE, SET_SORT } from '../actions/posts';

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
    case DELETE_POST :
      const k = Object.keys(state).find(key => {
        if(state[key].id === action.post.id) {
          return key;
        }
      });
      return {
        ...state,
        [k]: {
          deleted: true
        }
      };
    case UP_VOTE :
      const e = Object.keys(state).find(key => {
        if (state[key].id === action.post.id) {
          return key;
        }
      });
      return {
        ...state,
        [e]: {
          ...action.post,
          voteScore: action.post.voteScore + 1
        }
      };
    case DOWN_VOTE :
      const c = Object.keys(state).find(key => {
        if (state[key].id === action.post.id) {
          return key;
        }
      });
      return {
        ...state,
        [c]: {
          ...action.post,
          voteScore: action.post.voteScore - 1
        }
      };
    case SET_SORT :
      return {
        ...state,
        sortBy: action.sort,
      };
    default :
      return state;
  }
}