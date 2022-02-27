function telephoneCheck(str) {
    let no = str.match(/^1?/gi);
    return true;
}
  
telephoneCheck("555-555-5555");