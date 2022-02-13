function translatePigLatin(str) {
    if (str.match(/^[aeiou]/gi)) {
      return str.concat("way");
    }
    let consos = str.match(/^[^aeiou]+/gi);
    let noConsos = str.replace(consos[0], "")
    return noConsos.concat(consos, "ay");
}
  
translatePigLatin("glove");