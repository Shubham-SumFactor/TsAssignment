function findCommonElements(arr1, arr2) {
    var common = [];
    for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
        var num = arr1_1[_i];
        if (arr2.includes(num) && !common.includes(num)) {
            common.push(num);
        }
    }
    return common.sort(function (a, b) { return a - b; });
}
console.log(findCommonElements([1, 2, 3, 4], [5, 2, 7, 1, 4]));
