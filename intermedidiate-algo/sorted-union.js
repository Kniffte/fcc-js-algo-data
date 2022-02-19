function uniteUnique(arr) {
    const oneArr = [].concat(...arguments);
    const oneArrRev = oneArr.slice().reverse();
    let sortUnion = oneArrRev.filter((elem, index) => {
        if (oneArr.slice(0, -1 * (index + 1)).includes(elem)) {return false}
        return true
    });
    return sortUnion.reverse();
}
  
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));