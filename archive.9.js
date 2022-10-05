// Special Pythagorean triplet
// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a2 + b2 = c2
// For example, 3**2 + 4**2 = 9 + 16 = 25 = 5**2.
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.


function specialTrip(){
    // 3. a must be less than b which is less than c
    for (let a = 1; a < 500; a++) {
        for (let b = 2; b < 500; b++) {
            // 2. the sum of the first two numbers squared is equal to the third number squared
            let c = ((a**2) + (b**2)) **.5
            // 1. the sum of all three numbers equals 1000
            if(a+b+c == 1000){
                return `a: ${a} b: ${b} c: ${c} sum: ${a+b+c}`
            }
        }
    }
}

console.log(specialTrip())