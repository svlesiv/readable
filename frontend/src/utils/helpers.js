export function uuid() {
  return (Math.random()*16).toString(16).substring(2);
}

function sortByDate(object) {
  const sortedIds = [];
  const sortedObject = {};

  let timestampsArr = [],
      timestampsMap = new Map();
  Object.keys(object).forEach(index => {
    if(object[index].timestamp) {
      timestampsArr.push(object[index].timestamp);
      timestampsMap.set(object[index].timestamp, index);
    }
  });

  if(!object.sortBy || object.sortBy === "dateNew") {
    timestampsArr = timestampsArr.sort((a, b) => b - a);
  } else {
    timestampsArr = timestampsArr.sort((a, b) => a - b);
  }

  for(let date of timestampsArr) {
    sortedIds.push(object[timestampsMap.get(date)].id);
  }

  for (let i = 0; i < sortedIds.length; i++) {
    Object.keys(object).forEach(index => {
      if (sortedIds[i] === object[index].id){
        sortedObject[i] = object[index];
      }
    });
  }

  return sortedObject;
}

function sortByVote(object) {
  const sortedIds = [];
  const sortedObject = {};

  let voteArr = [],
      voteMap = new Map();
  Object.keys(object).forEach(index => {
    if(object[index].voteScore) {
      voteArr.push(object[index].voteScore);
      voteMap.set(object[index].voteScore, index);
    }
  });

  if(object.sortBy === "voteHigh") {
    voteArr = voteArr.sort((a, b) => b - a);
  } else {
    voteArr = voteArr.sort((a, b) => a - b);
  }

  for(let date of voteArr) {
    sortedIds.push(object[voteMap.get(date)].id);
  }

  for (let i = 0; i < sortedIds.length; i++) {
    Object.keys(object).forEach(index => {
      if (sortedIds[i] === object[index].id){
        sortedObject[i] = object[index];
      }
    });
  }

  return sortedObject;
}

export function sort(object) {
  let sortedObject = {};

  if (!object.sortBy || object.sortBy === "dateNew" || object.sortBy === "dateOld") {
    sortedObject = sortByDate(object);
  } else {
    sortedObject = sortByVote(object);
  }
  return sortedObject;
}
