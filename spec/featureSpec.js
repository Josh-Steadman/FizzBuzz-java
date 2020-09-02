'use strict';

describe('Feature Test:', function() {
  var plane;
  var airport;


  beforeEach(function() {
      plane = new Plane();
      airport = new Airport();
  });

  it('plane can land in a airport', function() {
    spyOn(airport, 'isStormy').and.returnValue(false)
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it("plane can't land in airport", function() {
    spyOn(airport, 'isStormy').and.returnValue(true)
    expect(function(){airport.clearForLanding(plane);}).toThrowError('too stormy to land')
  })

  describe('take_off', function() {
    it('takes off from the aiport', function() {
      spyOn(airport, 'isStormy').and.returnValue(false)
      plane.land(airport)
      expect(airport.planes()).toContain(plane);
      plane.take_off()
      expect(airport.planes()).toEqual([])

    });
  
    it("can't take off when stormy", function(){
        //plane.land(airport)
        spyOn(airport, 'isStormy').and.returnValue(true)
        expect(function(){airport.clearForTakeOff(plane);}).toThrowError('too stormy to take off')

    });
  });







});