function mutation(arr) {
    for (let letter of arr[1].split("")) {
      if (arr[0].toLowerCase().includes(letter.toLowerCase()) === false) {
        return false;
      }
    }
    return true;
  }
  
mutation(["hello", "hey"]);