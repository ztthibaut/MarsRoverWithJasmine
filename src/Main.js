var plateau = new Plateau(5, 5)
var initialPosition = new Position(1, 2, Cardinals.N, plateau)
var marsRover = new MarsRover(initialPosition)
marsRover.move("LMLMLMLMM")
var finalPosition = marsRover.getPosition()
// Comment this out to stop the alert from being shown
alert(finalPosition.getXCoordinate() + " " + finalPosition.getYCoordinate() + " " + finalPosition.getCardinal().name)

var initialPosition = new Position(3, 3, Cardinals.E, plateau)
var marsRover = new MarsRover(initialPosition)
marsRover.move("MMRMMRMRRM")
var finalPosition = marsRover.getPosition()
// Comment this out to stop the alert from being shown
alert(finalPosition.getXCoordinate() + " " + finalPosition.getYCoordinate() + " " + finalPosition.getCardinal().name)