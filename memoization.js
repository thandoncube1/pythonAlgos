function memoizedAddTo80() {
    let cache = {};
    // Closure - The main thing that makes JavaScript cool.
    return function (n) {
        if (n in cache) {
            return cache[n];
        } else {
            console.log("Long time");
            cache[n] = n + 80;
            return cache[n];
        }
    }
}

let memoized = memoizedAddTo80();
console.log(memoized(34));
console.log(memoized(34));