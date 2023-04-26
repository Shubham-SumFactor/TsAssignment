//4 Write a function that takes a sorted array of integers and a target integer as input and returns the index of the target integer in the array, or -1 if it does not exist. You cannot use the built-in indexOf or findIndex methods.

function targetIntegerIndex(arr: number[], target: number): number {
   
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1;
  }

console.log(targetIntegerIndex([1,2,3,4,5,6],4));

console.log(targetIntegerIndex([1,2,3,4,5,6],9));  