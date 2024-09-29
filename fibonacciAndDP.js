// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ...

function fibonacci(n) {
    if (n < 2) {
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let calculations = 0;
function fibonacciMaster() {
    let cache = {};
    return function fib(n) {
        calculations++;
        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) {
                return n;
            } else {
                cache[n] = fib(n - 1) + fib(n - 2);
                return cache[n];
            }
        }
    }
}

let masterFib = fibonacciMaster();
let result = masterFib(90);
console.log(result, " Calculations: ", calculations)