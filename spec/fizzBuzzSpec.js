
describe('Fizzscript', function() {

    var fizzscript;

    describe('it is divisable by', function() {

        it('divisable by 3', function() {
          fizzscript =  new Fizzscript(); 
          expect(isDivisableByThree(3)).toBe(true);

        });
    });

});