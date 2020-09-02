 
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
         if (this.isDivisibleByThree(num)  && this.isDivisibleByFive(num)) {
             return 'Fizzbuzz'
         } else if (this.isDivisibleByThree(num)) {
             return 'Fizz'
        } else if ( this.isDivisibleByFive(num)) {
             return 'Buzz'
        } else {
           return num
        }
     }
 }