export function uuid() {
  return (Math.random()*16).toString(16).substring(2);
}

export function sortByDate(posts) {
  const sortedIds = [];
  const sortedPosts = {};

  if(posts.sortBy === "date"){
    let timestampsArr = [],
        timestampsMap = new Map();
    Object.keys(posts).map(index => {
      if(posts[index].timestamp){
        timestampsArr.push(posts[index].timestamp);
        timestampsMap.set(posts[index].timestamp, index);
      }
    });
    
    timestampsArr = timestampsArr.sort((a, b) => b - a);
    
    for(let date of timestampsArr) { 
      sortedIds.push(posts[timestampsMap.get(date)].id);
    }
    
    for (let i = 0; i < sortedIds.length; i++) {
      Object.keys(posts).forEach(index => {
        if (sortedIds[i] === posts[index].id){
          sortedPosts[i] = posts[index];
        }
      })
    }
  }
  return sortedPosts;
}

export function sortByVote(posts) {
  const sortedIds = [];
  const sortedPosts = {};

  if(posts.sortBy === "vote"){
    let voteArr = [],
        voteMap = new Map();
    Object.keys(posts).map(index => {
      if(posts[index].voteScore){
        voteArr.push(posts[index].voteScore);
        voteMap.set(posts[index].voteScore, index);
      }
    });
    
    voteArr = voteArr.sort((a, b) => b - a);
    
    for(let date of voteArr) { 
      sortedIds.push(posts[voteMap.get(date)].id);
    }
    
    for (let i = 0; i < sortedIds.length; i++) {
      Object.keys(posts).forEach(index => {
        if (sortedIds[i] === posts[index].id){
          sortedPosts[i] = posts[index];
        }
      })
    }
  }
  return sortedPosts;
}

export function sortPosts(posts, sortedByDate, sortedByVote) {
  let sortedPosts = {};

  if(!posts.sortBy) {
    sortedPosts = posts;
  }else if (posts.sortBy === "date") {
    sortedPosts = sortedByDate;
  } else {
    sortedPosts = sortedByVote;
  }
  return sortedPosts;
}
