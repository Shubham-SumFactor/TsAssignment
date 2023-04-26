function findCommonElements(arr1: number[], arr2: number[]): number[] {
    const common: number[] = [];
  
    for (const num of arr1) {
      if (arr2.includes(num) && !common.includes(num)) {
        common.push(num);
      }
    }
  
    return common.sort((a, b) => a - b);
  }
console.log(findCommonElements([1,2,3,4],[5,2,7,1,4]))  
  