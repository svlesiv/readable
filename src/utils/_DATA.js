let posts = [
    {
       id: '12344556',
       timestamp: '1234555',
       title: 'fake post',
       body: 'fake data',
       author:  'me',
       category: 'unknown',
       voteScore: '1',
       deleted: 'false'
    }
]

export function _getPosts () {
  return new Promise((res) => {
    setTimeout(() => res({...posts}), 1000)
  });
}