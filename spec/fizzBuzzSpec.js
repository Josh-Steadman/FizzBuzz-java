
describe('Fizzscript', function() {

    var fizzscript;

    describe('it is divisable by', function() {

        it('divisable by 3', function() {
          fizzscript =  new Fizzscript() 
          expect(fizzscript.isDivisableByThree(3)).toBe(true);

        });

        it('not divisable by 3', function() {
            fizzscript =  new Fizzscript() 
            expect(fizzscript.isDivisableByThree(4)).toBe(false);
        });
  
    });

});