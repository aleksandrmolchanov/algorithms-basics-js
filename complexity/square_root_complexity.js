const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i == 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(7));
console.log(isPrime(9));