// Summation of primes
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.


function sumOPrimes(num){
    let testArray = [2]
    let sumOfPrimes = 2
    //for each index from 3 to the parameter. compare the index with all numbers less than the index number. if the index is divisible by any number other than itself or 1 then it is not a prime. can increment by 2 as we are only looking at odd numbers after 2
    // 1. find primes below 2 million
    for (let i = 3; i < num; i+=2) {
        let divCount = 0
        for (let j = 1; j * j <= i; j+=2) {
            if(i % j == 0){
                divCount ++
            }
            
        }
        if(divCount == 1){
            // 2. sum the primes
            sumOfPrimes += i
            // testArray.push(i)
        }
    }
    return sumOfPrimes
}

console.log(sumOPrimes(2000000))