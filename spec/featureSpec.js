'use strict';

describe('Feature Test:', function() {
  var plane;
  var airport;


  beforeEach(function() {
      plane = new Plane();
      airport = new Airport();
  });

  it('plane can land in a airport', function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  describe('take_off', function() {
    it('takes off from the aiport', function() {
      plane.land(airport)
      expect(airport.planes()).toContain(plane);
      plane.take_off()
      expect(airport.planes()).toEqual([])

    });
  

  });





});