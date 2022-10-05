// Sum square difference

// The sum of the squares of the first ten natural numbers is,
// 1**2+2**2+...+10**2 =385
// The square of the sum of the first ten natural numbers is,
// (1+2+...+10)**2 = 55**2 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .
// 3025 - 385 = 2640
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

// 3. subtract the square of the sum from the sum of the sqaure

// 1. create a function which takes a number (in this example we will give it 100 to answer the question)
function sumSquareDif(num){
    let sumSquare = 0
    let squareSum = 0
    // 2. sum the squares of all the numbers up to the argument and square the sum of all the numbers up to the argument
    for (let i = 1; i <= num; i++) {
        sumSquare += i**2
        squareSum += i
    }
    return (squareSum ** 2) - sumSquare
}

console.log(sumSquareDif(100))

