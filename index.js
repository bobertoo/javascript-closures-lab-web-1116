const app = "I don't do much."
function bumpCounter(){
  var bumps = 0

  function addBump(){
    bumps++
  }

  function getBumps(){
    return bumps
  }

  return {
    addBump,
    getBumps
  }
}

function createAnimal(animal) {

  return function(deadlyDevice) {
    return {
      animalType: animal,
      deadlyDevice: deadlyDevice
    }
  }
}

var sharkCreator = createAnimal('Shark')
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
var sharkWithFrickinCannon = sharkCreator('Cannon')
