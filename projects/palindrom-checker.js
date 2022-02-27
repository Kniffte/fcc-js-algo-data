function palindrome(str) {
    let alphaNumOnly = str.toLowerCase().replace(/[^a-z0-9]/gi, "");
    let alphaNumOnlyRev = alphaNumOnly.split("").reverse().join("");
    return alphaNumOnly === alphaNumOnlyRev;
}
  
// palindrome("eye");
// palindrome("A man, a plan, a canal. Panama")
palindrome("1 eye for of 1 eye.")