import { _getPosts } from './_DATA.js';

export function fetchPosts () {
  return Promise.all([
    _getPosts()
  ]).then((posts) => ({
    posts
  }));
}