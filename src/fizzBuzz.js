 
 class Fizzscript {
     isDivisibleByThree(num) {
         if (num % 3 === 0) {
           return true
         } else {
           return false
         }
     }

     isDivisibleByFive(num) {
        if (num % 5 === 0) {
          return true
        } else {
          return false
        }
     }

     isFizzbuzz(num) {
         if (this.isDivisibleByThree(num) === true && this.isDivisibleByFive(num) === true) {
             return 'Fizzbuzz'
         } else if (this.isDivisibleByThree(num) === true && this.isDivisibleByFive(num) === false) {
             return 'Fizz'
        } else if (this.isDivisibleByThree(num) === false && this.isDivisibleByFive(num) === true) {
             return 'Buzz'
        } else {
           return num
        }
     }
 }