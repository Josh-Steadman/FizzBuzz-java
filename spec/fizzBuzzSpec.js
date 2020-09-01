
describe('Fizzscript', function() {

    var fizzscript;

    describe('the number is', function() {

        it('divisible by 3', function() {
          fizzscript =  new Fizzscript() 
          expect(fizzscript.isDivisibleByThree(3)).toBe(true);

        });

        it('not divisible by 3', function() {
            fizzscript =  new Fizzscript() 
            expect(fizzscript.isDivisibleByThree(4)).toBe(false);
        });
  
        it('divisible by 5', function() {
            fizzscript = new Fizzscript()
            expect(fizzscript.isDivisibleByFive(5)).toBe(true);
        }); 

        it('not divisible by 5', function() {
            fizzscript =  new Fizzscript() 
            expect(fizzscript.isDivisibleByFive(7)).toBe(false);
        });
    });

    describe('it returns', function() {

        it('Fizzbuzz', function() {
            fizzscript = new Fizzscript()
            expect(fizzscript.isFizzbuzz(15)).toEqual('Fizzbuzz')
        });
    });

});