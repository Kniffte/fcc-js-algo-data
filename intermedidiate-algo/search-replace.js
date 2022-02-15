function myReplace(str, before, after) {
    if (before.search(/^[A-Z]/g) > -1) {
        let upperAfter = after.slice(0, 1).toUpperCase();
        upperAfter = upperAfter.concat(after.slice(1));
        return str.replace(before, upperAfter)
    }
    return str.replace(before, after.toLowerCase())
}
  
myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");