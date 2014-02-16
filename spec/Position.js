describe("Position", function(){
	var customMatchers = {
		toEqualPosition: function(util, customEqualityTesters) {
			return{
				compare: function(actual, expected) {
					var result = {}
					var actualPosition = actual
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
					}
					return result
				}
			}
		}
	}
	beforeEach(function() {
	    jasmine.addMatchers(customMatchers);
	  })

	it("has x,y coordinates & a cardinal", function(){
		var position = new Position(0, 1, Cardinals.N)
		expect(position.getXCoordinate()).toEqual(0)
		expect(position.getYCoordinate()).toEqual(1)
		expect(position.getCardinal()).toEqual(Cardinals.N)
	})
	it("accepts only valid cardinals", function(){
		var incorrectCardinal = function(){
			var position = new Position(0, 1, "F")
		}
		expect(incorrectCardinal).toThrow(
				{
					name: "Incorrect Cardinal",
					message: "An incorrect cardinal direction was provided"
				}
			)
	})
	it("can move forward when facing North", function(){
		var position = new Position(0, 0, Cardinals.N)
		position.move("M")
		expect(position).toEqualPosition(new Position(0, 1, Cardinals.N))
	})
	it("can move forward when facing North from a different y-axis position", function(){
		var position = new Position(0, 2, Cardinals.N)
		position.move("M")
		expect(position).toEqualPosition(new Position(0, 3, Cardinals.N))
	})
	it("can move forward when facing South", function(){
		var position = new Position(0, 1, Cardinals.S)
		position.move("M")
		expect(position).toEqualPosition(new Position(0, 0, Cardinals.S))
	})
	it("can move forward when facing South from a different y-axis position", function(){
		var position = new Position(0, 2, Cardinals.S)
		position.move("M")
		expect(position).toEqualPosition(new Position(0, 1, Cardinals.S))
	})
	it("can move forward when facing East", function(){
		var position = new Position(0, 0, Cardinals.E)
		position.move("M")
		expect(position).toEqualPosition(new Position(1, 0, Cardinals.E))
	})
	it("can move forward when facing East from a different x-axis position", function(){
		var position = new Position(1, 0, Cardinals.E)
		position.move("M")
		expect(position).toEqualPosition(new Position(2, 0, Cardinals.E))
	})
	it("can move forward when facing West", function(){
		var position = new Position(1, 0, Cardinals.W)
		position.move("M")
		expect(position).toEqualPosition(new Position(0, 0, Cardinals.W))
	})
	it("can move forward when facing West from a different x-axis position", function(){
		var position = new Position(2, 0, Cardinals.W)
		position.move("M")
		expect(position).toEqualPosition(new Position(1, 0, Cardinals.W))
	})
})