// It is an optimization techniques
// Do you have something you can cache?
/**
 * Dynamic programming doesn't mean anything. It is a way to solve problems by * breaking it down to sub problems.
 * This helps us create better solutions. */

// Memoization ~~~~~~~ Caching
// Caching is just a way to speed up getting of retrieving data.

function addTo80(n) {
    console.log("Long time");
    return n + 80
}

let cache = {};

function memoizedAddTo80(n) {
    if (n in cache) {
        return cache[n]; // O(1)
    } else {
        console.log("Long time");
        cache[n] = n + 80;
        return cache[n];
    }
}

console.log(memoizedAddTo80(90));
console.log(memoizedAddTo80(90));