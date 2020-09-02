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

  it('can clear planes for takeoff', function() {
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });

  describe('clearForLanding', function() {
    it('clear a plane for landing', function() {
    	airport.clearForLanding(plane);
    	expect(airport.planes()).toContain(plane);
      
    });


  });




});