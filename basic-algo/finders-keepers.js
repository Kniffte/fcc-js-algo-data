function findElement(arr, func) {
    let num = 0;
    for (let el of arr) { 
      if(func(el)) {
        num = el;
      }
    }
    if (num != 0) return num;
    return undefined;
  }
  
findElement([1, 2, 3, 4], num => num % 2 === 0);