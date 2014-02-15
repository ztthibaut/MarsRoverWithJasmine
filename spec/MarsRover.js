describe("Mars rover", function(){
	var customMatchers = {
		toHavePosition: function(util, customEqualityTesters) {
			return{
				compare: function(actual, expected) {
					var result = {}
					var actualPosition = actual.getPosition()
					result.pass = util.equals(actualPosition.getXCoordinate(), expected.getXCoordinate()) 
						&& util.equals(actualPosition.getYCoordinate(), expected.getYCoordinate())
						&& util.equals(actualPosition.getCardinal(), expected.getCardinal())

					if(result.pass){
						result.message = "The Mars Rover has the correct position"
					} else {
						result.message = "Expected the Mars Rover to be at " 
							+ expected.getXCoordinate() + " on x-axis, "
							+ expected.getYCoordinate() + " on y-axis "
							+ "and facing " + expected.getCardinal()
					}
					return result
				}
			}
		}
	}
	beforeEach(function() {
	    jasmine.addMatchers(customMatchers);
	  })

	it("can move forward when facing North", function(){
		var initialPosition = new Position(0, 0, Cardinals.N)
		var marsRover = new MarsRover(initialPosition)
		marsRover.move("M")
		expect(marsRover).toHavePosition(new Position(0, 1, Cardinals.N))
	})
	it("can move forward when facing North from a different y-axis position", function(){
		var initialPosition = new Position(0, 2, Cardinals.N)
		var marsRover = new MarsRover(initialPosition)
		marsRover.move("M")
		expect(marsRover).toHavePosition(new Position(0, 3, Cardinals.N))
	})
	it("can move forward when facing South", function(){
		var initialPosition = new Position(0, 1, Cardinals.S)
		var marsRover = new MarsRover(initialPosition)
		marsRover.move("M")
		expect(marsRover).toHavePosition(new Position(0, 0, Cardinals.S))
	})
	it("can move forward when facing South from a different y-axis position", function(){
		var initialPosition = new Position(0, 2, Cardinals.S)
		var marsRover = new MarsRover(initialPosition)
		marsRover.move("M")
		expect(marsRover).toHavePosition(new Position(0, 1, Cardinals.S))
	})
})