// Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?


function LPF(){
    let newArray = []
    let num = 600851475143
    //any factor less than the square root of the number we check, will have corresponding factor larger than the square root of the number. so we only need to check up to the square root of the number, and then we can deduct the remaining factors
    for (let i = 1; i * i < num; i+=2) {
        //1. create a list of all odd factors of the given number and push to array
        if(num % i == 0){
            newArray.push(i)
            // console.log(i)
        }
    }
    //2. traverse the list backwards starting with the largest number and check that number if it is a prime
    for (let j = newArray.length - 1; j >= 0.; j--) {
        let isPrime = true
        for (let k = 2; k < newArray[j]; k++) {
            if(newArray[j] % k == 0){
                isPrime = false
            }
        }if(isPrime){
            return newArray[j]
        }
    }
    // return newArray
}

console.log(LPF())