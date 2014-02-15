describe("Mars rover", function(){
	it("can move forward when facing North", function(){
		var initialPosition = new Position(0, 0, Cardinals.N)
		var marsRover = new MarsRover(initialPosition)
		marsRover.move("M")
		expect(marsRover.getPosition().getXCoordinate()).toEqual(0)
		expect(marsRover.getPosition().getYCoordinate()).toEqual(1)
		expect(marsRover.getPosition().getCardinal()).toEqual(Cardinals.N)
	})
	it("can move forward when facing South", function(){
		var initialPosition = new Position(0, 1, Cardinals.S)
		var marsRover = new MarsRover(initialPosition)
		marsRover.move("M")
		expect(marsRover.getPosition().getXCoordinate()).toEqual(0)
		expect(marsRover.getPosition().getYCoordinate()).toEqual(0)
		expect(marsRover.getPosition().getCardinal()).toEqual(Cardinals.S)
	})
})