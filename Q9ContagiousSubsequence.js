function maxSubarraySum(arr) {
    var maxSum = arr[0];
    var currentSum = arr[0];
    for (var i = 0; i < arr.length - 1; i++) {
        currentSum = Math.max(currentSum + arr[i], arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}
var arr = [2, -3, 5, -1, 2, 6, -2, 4];
var maxSum = maxSubarraySum(arr);
console.log(maxSum);
var arr2 = [3, -7, 4, 9, -5];
console.log(maxSubarraySum(arr2));
