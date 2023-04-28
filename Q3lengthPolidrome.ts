// 3 Write a function that takes a string as input and returns the length of the longest palindromic substring.

function longestPalindromicSubstring(str: string): number {
    let maxLength = 0;
    
    for (let i = 0; i < str.length; i++) {
      // Check for odd length palindromes centered at i
      let left = i;
      let right = i;
      
      while (left >= 0 && right < str.length && str[left] === str[right]) {
        const currentLength = right - left + 1;
        maxLength = Math.max(maxLength, currentLength);
        left--;
        right++;
      }
      
      // Check for even length palindromes centered at i
      left = i;
      right = i + 1;
      
      while (left >= 0 && right < str.length && str[left] === str[right]) {
        const currentLength = right - left + 1;
        maxLength = Math.max(maxLength, currentLength);
        left--;
        right++;
      }
    }
    
    return maxLength;
  }
  
console.log(longestPalindromicSubstring("abacdcaberg")); 
/*Input str = "abacdcaberg"
Pallindrome sub string could be -

a) subString1 = "aba"
b) subString2 ="cdc"
c) subString3 ="acdca"
d) subString4 ="bacdcab" 
Output: (d) "bacdcab" = it is the longest Pallindromesub string in string.
*/