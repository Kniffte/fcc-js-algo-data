function pairElement(str) {
    const letters = str.split("");
    let dna = letters.map(letter => {
        let pair = [letter];
        switch (letter) {
            case "A":
                pair.push("T");
                break;
            case "T":
                pair.push("A");
                break;
            case "G":
                pair.push("C");
                break;
            case "C":
                pair.push("G");
                break;
        }
        return pair;
    });
    return dna;
}
  
pairElement("GCG");