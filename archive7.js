// 10001st prime
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

// given a number as n find the nth prime
// starting with 2 determine if the number is a prime. if it is increment the prime count by 1. if not continue
// when the prime count is == to the num parameter return the number

function nthPrime(num){
    let primeCount = 2
    let number = 3
    while(primeCount < num){
        number += 2
        //check if number is a prime
        let divCount = 0
        for (let i = 1; i*i <= number; i+=2){
            if(number % i == 0){
                divCount ++
            }
        }
        //if the divisible count is greater than 2 meaning the number is divisible by itself, 1 and more numbers then it is not a prime
        if(divCount > 1){
            // console.log('not a prime: ' + number)
        }else{
            primeCount++
            // console.log(`prime count: ${primeCount}, number: ${number}`)
        }
    }
    return `the ${num}th prime is ${number}`
}

console.log(nthPrime(10001))