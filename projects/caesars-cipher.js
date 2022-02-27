function rot13(str) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM".split("");
    const letters = str.split("");
    const cipher = [];
    for (let i = 0; i < letters.length; i++) {
        if (alphabet.includes(letters[i])) {
            let index = alphabet.indexOf(letters[i]);
            cipher.push(alphabet[index + 13]);
        } else {
            cipher.push(letters[i]);
        }
    }
    return cipher.join("");
}

rot13("SERR PBQR PNZC");