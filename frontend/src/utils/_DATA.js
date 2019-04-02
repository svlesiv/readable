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

export const categories = [
  {
    name: 'birds',
    URL: 'birds'
  },
  {
    name: 'fish',
    URL: 'fish'
  }
]

export function _getPosts () {
  return new Promise((res) => {
    setTimeout(() => res({...posts}), 1000)
  });
}