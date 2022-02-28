function telephoneCheck(str) {
    if (str.match(/^1?[- ]?([(][0-9]{3}[)]|[0-9]{3})[- ]?[0-9]{3}[- ]?[0-9]{4}$/gi)) {
        return true
    };
    return false;
}
  
telephoneCheck("555-555-5555");
// telephoneCheck("555-5555");
// telephoneCheck("27576227382");