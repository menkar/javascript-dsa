// function isPowerOfTwo(n) {
//     if (n < 1) {
//         return false;
//     }

//     while(n > 1) {
//         if (n % 2 !== 0) {
//             return false;
//         }
//         n = n/2;
//     }
//     return true;
// }

// console.log(isPowerOfTwo(1)); // True
// console.log(isPowerOfTwo(4)); // True
// console.log(isPowerOfTwo(5)); // True

// Big-O = O(logn);

function isPowerOfTwoBitWise(n) {
    if (n < 1) {
        return false;
    }

    return (n & (n-1)) === 0;
}


console.log(isPowerOfTwoBitWise(1)); // True
console.log(isPowerOfTwoBitWise(4)); // True
console.log(isPowerOfTwoBitWise(5)); // True

// Big-O = O(1) // More optimized 