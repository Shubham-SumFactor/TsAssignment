// Write a function that takes an array of integers as input and returns the maximum subarray sum, where a subarray is defined as a contiguous subsequence of the original array.

function maxSubarraySum(arr: number[]): number {
    let maxSum = arr[0];
    let currentSum = arr[0];
  
    for (let i = 0; i < arr.length -1; i++) {
      currentSum = Math.max( currentSum +arr[i],  arr[i]);
      maxSum = Math.max(maxSum, currentSum);
    }
  
    return maxSum;
  }
  
  const arr = [2, -3, 5, -1, 2, 6, -2, 4];
 
  const maxSum = maxSubarraySum(arr);
  console.log(maxSum); 
  const arr2 = [3, -7, 4, 9, -5];
  console.log(maxSubarraySum(arr2))