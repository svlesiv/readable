import { fetchCategories} from '../utils/api';

export const GET_CATEGORIES = 'GET_CATEGORIES';

function getCategories (categories) {
  return {
    type: GET_CATEGORIES,
    categories,
  };
}

export function handleGetCategories() {
  return (dispatch) => {
    return fetchCategories()
      .then(({ categories }) => {
        dispatch(getCategories(categories));
      });
  };
}