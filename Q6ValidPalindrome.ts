//Write a function that takes a string as input and returns true if the string is a valid palindrome after removing exactly one character, and false otherwise.

function validPalindrome(str: string): boolean {
    let left = 0; //leftmost character
    let right = str.length - 1; //rightmost character
  
    while (left < right) {
      if (str[left] !== str[right]) {//checks if character are diffirent
        // If characters don't match, try removing either the left or right character
        return isPalindrome(str, left + 1, right) || isPalindrome(str, left, right - 1);
      }
      left++;
      right--;
    }
  
    return true; 
  }
  //for substring
  function isPalindrome(str: string, left: number, right: number): boolean {
    while (left < right) {
      if (str[left] !== str[right]) {// if the character are different => not a valid palindrome
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
console.log(validPalindrome("madama")); 
console.log(validPalindrome("abc45cba"));  
console.log(validPalindrome("aac345caa")); 