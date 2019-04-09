export const fetchPosts = () =>
  fetch('http://localhost:3001/posts', {
    headers: { Authorization: 'whatever-you-want' }
  }).then(data => data.json())

  export const fetchCategories = () =>
  fetch('http://localhost:3001/categories', { 
    headers: { 'Authorization': 'whatever-you-want' }
  }).then(data => data.json())

  export const fetchComments = (id) =>
  fetch(`http://localhost:3001/posts/${id}/comments`, { 
    headers: { 'Authorization': 'whatever-you-want' }
  }).then(data => data.json())