function fearNotLetter(str) {
    const all = "abcdefghijklmnopqrstuvwxyz";
    if (all.includes(str)) {
        return undefined
    }
    const allLetters = all.split("");
    const strLetters = str.split("");
    let startIndex = all.indexOf(strLetters[0]);
    for (let i = 0; i < strLetters.length; i++) {
        if (strLetters[i] !== allLetters[startIndex + i]) {
            return allLetters[startIndex + i]
        }
    };
}
  
console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));