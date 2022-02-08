function chunkArrayInGroups(arr, size) {
    let chunky = [];
    for (let i = 0; i < arr.length; i += size) {
      chunky.push(arr.slice(i, i + size));
    }
    return chunky;
  }
  
chunkArrayInGroups(["a", "b", "c", "d", "e"], 2);