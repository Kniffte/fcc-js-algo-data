function dropElements(arr, func) {
    let dropped = [];
    for (let i = 0; i < arr.length; i++) {
      if (func(arr[i])) {
        dropped = arr.slice(i) 
        break;
      }
    }
    return dropped;
}
  
//   dropElements([1, 2, 3], function(n) {return n < 3; });
  dropElements([1, 2, 3, 4], function(n) {return n >= 3;});