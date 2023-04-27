//Write a function that takes an array of integers as input and returns the length of the longest increasing subsequence.

function longestIncreasingSubsequence(arr: number[]): number {
    const tails: number[] = [];
  
    for (let x of arr) {
      let left = 0;
      let right = tails.length;
  
      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (tails[mid] < x) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
  
      if (left === tails.length) {
        tails.push(x);
      } else {
        tails[left] = x;
      }
    }
  
    return tails.length;
  }

    console.log(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]))  
    // [2, 3, 7, 101] o/p => 4 length 
    console.log(longestIncreasingSubsequence([100, 20, 9, 35, 45, 29, 101]))  
