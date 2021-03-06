describe("Mars rover", function(){
	var customMatchers = {
		toHavePosition: function(util, customEqualityTesters) {
			return{
				compare: function(actual, expected) {
					var result = {}
					var actualPosition = actual.getPosition()
					result.pass = util.equals(actualPosition.getXCoordinate(), expected.getXCoordinate()) 
						&& util.equals(actualPosition.getYCoordinate(), expected.getYCoordinate())
						&& util.equals(actualPosition.getCardinal().name, expected.getCardinal().name)

					if(result.pass){
						result.message = "The Mars Rover has the correct position"
					} else {
						result.message = "Expected the Mars Rover to be at " 
							+ expected.getXCoordinate() + " on x-axis, "
							+ expected.getYCoordinate() + " on y-axis "
							+ "and facing " + expected.getCardinal().name
							+ ". Instead it is at "
							+ actualPosition.getXCoordinate() + " on x-axis, "
							+ actualPosition.getYCoordinate() + " on y-axis "
							+ "and facing " + actualPosition.getCardinal().name
					}
					return result
				}
			}
		}
	}
	var plateau = new Plateau(5,5)
	beforeEach(function() {
	    jasmine.addMatchers(customMatchers)
	  })
	it("can take multiple steps at once", function(){
		var initialPosition = new Position(0, 0, Cardinals.N, plateau)
		var marsRover = new MarsRover(initialPosition)
		marsRover.move("MRM")
		expect(marsRover).toHavePosition(new Position(1, 1, Cardinals.E, plateau))
	})
	it("throws error if incorrect movement instruction is provided", function(){
		var initialPosition = new Position(0, 0, Cardinals.W, plateau)
		var marsRover = new MarsRover(initialPosition)
		var incorrectMove = function(){
			marsRover.move("W")
		}
		expect(incorrectMove).toThrow(
				{
					name: "Incorrect movement",
					message: "An incorrect movement, W was provided"
				}
			)
	})
})