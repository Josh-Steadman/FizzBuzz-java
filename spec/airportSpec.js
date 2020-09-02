'use strict';

describe('Airport', function() {
  var airport
  var plane
  beforeEach( function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane',['land']);
  });

  it('has no planes', function(){  
    expect(airport.planes()).toEqual([])
   
  });
describe('plane take-off', function(){
 
    it('can clear planes for takeoff', function() {
     spyOn(airport, 'isStormy').and.returnValue(false)
     airport.clearForLanding(plane);
     airport.clearForTakeOff(plane);
     expect(airport.planes()).toEqual([]);
     });  

     it('cant take-off', function(){
        
         //airport.clearForLanding(plane)
         spyOn(airport, 'isStormy').and.returnValue(true)
         expect(function(){airport.clearForTakeOff(plane);}).toThrowError('too stormy to take off')
     })
  })


  describe('clearForLanding', function() {
    it('clear a plane for landing', function() {
        spyOn(airport, 'isStormy').and.returnValue(false)
    	airport.clearForLanding(plane);
    	expect(airport.planes()).toContain(plane);
      
    });


  });
  
   describe('stormy weather', function(){

      it("can't land", function(){
         spyOn(airport, 'isStormy').and.returnValue(true) 
         expect(function(){airport.clearForLanding(plane);}).toThrowError('too stormy to land')
      });
   });


});