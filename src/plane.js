
class Plane {
	constructor() {
		this.__location;
	}
   
  land(airport) {
    airport.clearForLanding(this)
    this._location = airport;
  };

  take_off() {
  	console.log(this._location)
    this._location.clearForTakeOff(this)
  }

};