// 3 Write a function that takes a string as input and returns the length of the longest palindromic substring.
function longestPalindromicSubstring(str) {
    var maxLength = 0;
    for (var i = 0; i < str.length; i++) {
        // Check for odd length palindromes centered at i
        var left = i;
        var right = i;
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            var currentLength = right - left + 1;
            maxLength = Math.max(maxLength, currentLength);
            left--;
            right++;
        }
        // Check for even length palindromes centered at i
        left = i;
        right = i + 1;
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            var currentLength = right - left + 1;
            maxLength = Math.max(maxLength, currentLength);
            left--;
            right++;
        }
    }
    return maxLength;
}
console.log(longestPalindromicSubstring("abacdcaberg"));
