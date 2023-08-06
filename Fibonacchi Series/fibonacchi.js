function generateFibonacci(n) {
    const fibonacciSeries = [0, 1];
  
    for (let i = 2; i < n; i++) {
      const nextFibonacci = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
      fibonacciSeries.push(nextFibonacci);
    }
  
    return fibonacciSeries;
  }
  
  function userInputDec() {
    const readline = require("readline");
  
    const r_interface = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    r_interface.question("What is your number? ", function (n) {
      
      const fibonacciSeries = generateFibonacci(Number(n));
      console.log(`Fibonacci Series of ${n}: `, fibonacciSeries);
      r_interface.close();
    });
  }
  
  userInputDec();
  