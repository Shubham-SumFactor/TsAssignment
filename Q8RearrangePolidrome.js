//.Write a function that takes a string as input and returns true if the string can be rearranged to form a palindrome, and false otherwise.
function canFormPalindrome(str) {
    var oddChars = new Set();
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (oddChars.has(char)) {
            oddChars["delete"](char);
        }
        else {
            oddChars.add(char);
        }
    }
    return oddChars.size <= 1;
}
console.log(canFormPalindrome('madam'));
