/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

const miniMaxSum = (arr) => {
  arr.sort();
  let minSum = 0;
  let maxSum = 0;
  
  for(let i = 0; i < arr.length - 1; i++) {
    minSum +=arr[i];
  }
  for(let i = 1; i < arr.length; i++) {
    maxSum +=arr[i];
  }
  console.log(minSum, maxSum);
}

/////////////////////////////////////////////////////////
const miniMaxSum = (arr) => {
        arr.sort((a, b) => a - b);

        let min = arr.slice(0, arr.length - 1).reduce((a,b) => a+b)
        let max = arr.slice(1).reduce((a,b) => a+b)

        console.log(min, max)
}
