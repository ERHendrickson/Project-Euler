//Even Fibonacci numbers
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

//3. find the sum of all the even terms

//create a list to hold all the terms

function fibTerms(){
    let newArray = [1, 2]
    let i = 0
    let newTerm = 0
    //1. find all fibonacci terms whos values do not exceed 4mil
    while(newTerm < 4000000){
        newTerm = newArray[i] + newArray[i+1]
        newArray.push(newTerm)
        i++
    }
    //2. filter out all odd terms leaving only even terms
    const filtArray = newArray.filter(num => num % 2 == 0)

    //3. find the sum of all the even terms
    const sumArray = filtArray.reduce((prevVal, currVal) => prevVal + currVal, 0)
    return sumArray
}

console.log(fibTerms())

