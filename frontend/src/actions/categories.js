import { fetchCategories} from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const GET_CATEGORIES = 'GET_CATEGORIES';

function getCategories (categories) {
  return {
    type: GET_CATEGORIES,
    categories,
  };
}

export function handleGetCategories() {
  return (dispatch) => {
    dispatch(showLoading());
    return fetchCategories()
      .then(({ categories }) => {
        dispatch(getCategories(categories));
        dispatch(hideLoading());
      });
  };
}