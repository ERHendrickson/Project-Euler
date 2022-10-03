// Largest palindrome product
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.


function productList(){
    let newArray = []
    for (let i = 100; i < 1000; i++) {
        for (let j = i; j < 1000; j++){
            //1. create a list of all products of two 3 digit numbers
            newArray.push(i*j)
        }
    }
    return newArray
}

// console.log(productList())

let prodArray = productList()
// console.log(prodArray)

//2. create a function to determin if the value given is a palendrome
function isPal(initialNum){
    let reversed = 0
    let tempNum = initialNum
    while(tempNum > 0){
        let lastDig = tempNum % 10
        reversed = reversed * 10 + lastDig
        tempNum = parseInt(tempNum/10)
        // console.log(tempNum, reversed)
    }
    return initialNum === reversed
    
}
// console.log(isPal(1001))

//3. create a new list with all the palendromes from the prodArray
function palList(array){
    let listOfPalendromes = []
    for (let i = 0; i < array.length; i++) {
        if(isPal(prodArray[i])){
            listOfPalendromes.push(array[i])
        }
    }
    return listOfPalendromes
}

// console.log(palList(prodArray))

//4. the largest palendrom will be the last number of the list
const allPalendromes = palList(prodArray)
// console.log(allPalendromes)
console.log(Math.max(...allPalendromes))