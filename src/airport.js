
class Airport {
  constructor(){
    this._hanger = []
  }
  planes() {
    return this._hanger
  }

  clearForLanding(plane) {
  	this._hanger.push(plane)
    
  };

  clearForTakeOff(plane) {
    this._hanger.pop(plane)


  };

};