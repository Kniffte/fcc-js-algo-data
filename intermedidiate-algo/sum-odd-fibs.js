function sumFibs(num) {
    const fibs = [0, 1];
    for (let i = 2; i <= num; i++) {
        if (fibs[i - 2] + fibs[i - 1] > num) break; 
        fibs.push(fibs[i - 2] + fibs[i - 1]);
    }
    let oddFibsSum = fibs.filter(val => val % 2 !== 0).reduce((acc, curr) => acc + curr);
    return oddFibsSum;
}
  
// sumFibs(4);
console.log(sumFibs(1000));