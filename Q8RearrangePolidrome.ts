//.Write a function that takes a string as input and returns true if the string can be rearranged to form a palindrome, and false otherwise.

function canFormPalindrome(str: string): boolean {
    const oddChars = new Set<string>();
  
    for (const char of str) {
      if (oddChars.has(char)) {
        oddChars.delete(char);
      } else {
        oddChars.add(char);
      }
    }
  
    return oddChars.size <= 1;
  }
  
  console.log(canFormPalindrome('abaab')) //true
  console.log(canFormPalindrome('xyzwe')) //false
