function sumPrimes(num) {
    let sum = 0;
    const isPrime = no => {
        for(let k = 2, s = Math.sqrt(no); k <= s; k++) {
            if(no % k === 0) return false;
        }
        return no > 1;
    }
    for (let i = 0; i <= num; i++){
        if (isPrime(i)) {sum += i}
    }
    return sum;
}
  
console.log(sumPrimes(10));