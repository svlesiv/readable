export const fetchPosts = () =>
  fetch('http://localhost:3000/posts', {
    headers: { Authorization: 'some' }
  }).then(data => data.text())

  export const fetchCategories = () =>
  fetch('http://localhost:3000/categories', { 
    headers: { 'Authorization': 'some' }
  }).then(data => data.text())