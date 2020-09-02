
class Airport {
  constructor(){
    this._hanger = []
  }
  planes() {
    return this._hanger
  }

  clearForLanding(plane) {
    if (this.isStormy()) {
        throw new Error('too stormy to land')
      } else {
       this._hanger.push(plane)
      }
    
  };

  clearForTakeOff(plane) {
      if (this.isStormy()) {
        throw new Error('too stormy to take off')
      } else {
          this._hanger.pop(plane)
      }


  };

  isStormy() {
      let num = Math.round(Math.random() * 4)
      if (num === 1) {
        return true
      } else {
          return false
      }
  }

};