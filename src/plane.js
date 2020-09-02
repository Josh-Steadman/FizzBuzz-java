
class Plane {
   
    land(airport) {
    airport.planes().push(this)
    console.log(airport.planes)
    }

}