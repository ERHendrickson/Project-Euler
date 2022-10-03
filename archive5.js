// Smallest multiple
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// the number will need to be evenly divisible by at least 20 so we can increment by 20.

// brute force method would be to run a while loop until the number found. can increment by 2 since the number must be even and start at 20 since that would be the smallest number it could potentially be

function smlMulti(){
    let startingNum = 20
    let num = 20
    while(num > 2){
        //check to see if startingNum is divisible by num. if it is reduce num by 1 and check if startingNum is divisible by that num.
        //continue to check until startingNum is no longer divisible by num in which case return num back to 20. OR num is below 2 in which
        //case return starting num
        if(startingNum % num == 0){
            num --
        }else{
            num = 20
            startingNum += 20
        }
    }
    return startingNum
}

console.log(smlMulti())