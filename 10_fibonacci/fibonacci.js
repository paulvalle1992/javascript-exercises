const fibonacci = (n) =>  {
    if (n < 0) return "OOPS";
    if (n === 0) return 0;
    const fib = [0, 1]
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return Number(fib.splice(-1).toString())
};

// Do not edit below this line
module.exports = fibonacci;
