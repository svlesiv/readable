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

export const apiAddPost = (post) =>
  fetch(`http://localhost:3001/posts`, {
    method: 'POST',
    headers: { 
      'Authorization': 'whatever-you-want',
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(post)
  }).then(data => data.json())

export const apiUpdatePost = (post) =>
  fetch(`http://localhost:3001/posts/${post.id}`, {
    method: 'PUT',
    headers: { 
      'Authorization': 'whatever-you-want',
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(post)
  }).then(data => data.json())