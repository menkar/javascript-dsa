

// 5!  =   5 * 4!
// 4!  =   4 * 3!
// 3!  =   3 * 2!
// 2!  =   2 * 1!
// 1!  =   1 * 0!
// 0!

// Formula: n! = n * (n-1)!;

function recursiveFactorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * recursiveFactorial(n-1);
}

console.log(recursiveFactorial(0)); // 1
console.log(recursiveFactorial(1)); // 1
console.log(recursiveFactorial(5)); // 120


// Big-O = O(n)