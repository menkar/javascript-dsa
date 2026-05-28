function isPrime(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

const result = isPrime(4);
const result1 = isPrime(5);
const result2 = isPrime(7);

console.log(" 4 ", result);
console.log(" 5 ", result1);
console.log(" 7 ", result2);

// Big-O = O(sqrt(n));