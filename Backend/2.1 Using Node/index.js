function fibonacci (n) {
    let fibonacciResult = [];

     for (let i = 0; i < n; i++) {
         if (i === 0) {
             fibonacciResult.push(0)
         } else if (i === 1) {
             fibonacciResult.push(1)
         } else {
             let sum = fibonacciResult[fibonacciResult.length - 1] + fibonacciResult[fibonacciResult.length - 2];
             fibonacciResult.push(sum);
         }
    }
    return fibonacciResult
}

console.log(fibonacci(9))