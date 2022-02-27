function convertToRoman(num) {
    const ones = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    const tens = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    const hundreds = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    const thousands = ['M', 'MM', 'MMM'];
    if (num < 10) {
        return ones[num - 1];
    }
    let digits = num.toString().split("").map(digit => parseInt(digit));
    let roman = "";
    if (num < 100) {
        roman = roman.concat(tens[digits[0] - 1]);
        roman = roman.concat(digits[1] == 0 ? "" : ones[digits[1] - 1]);
        return roman;
    }
    if (num < 1000) {
        roman = roman.concat(hundreds[digits[0] - 1]);
        roman = roman.concat(digits[1] == 0 ? "" : tens[digits[1] - 1]);
        roman = roman.concat(digits[2] == 0 ? "" : ones[digits[2] - 1]);
        return roman;
    }
    if (num < 10000) {
        roman = roman.concat(thousands[digits[0] - 1]);
        roman = roman.concat(digits[1] == 0 ? "" : hundreds[digits[1] - 1]);
        roman = roman.concat(digits[2] == 0 ? "" : tens[digits[2] - 1]);
        roman = roman.concat(digits[3] == 0 ? "" : ones[digits[3] - 1]);
        return roman;
    }
}
   
// convertToRoman(36);
convertToRoman(3999);