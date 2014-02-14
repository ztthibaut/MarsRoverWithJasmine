describe("Position", function(){
	it("has x,y coordinates & a direction", function(){
		var position = new Position(0, 1, Directions.N)
		expect(position.getXCoordinate()).toEqual(0)
		expect(position.getYCoordinate()).toEqual(1)
		expect(position.getDirection()).toEqual(Directions.N)
	})
	it("accepts only valid directions", function(){
		var incorrectDirection = function(){
			var position = new Position(0, 1, "F")
		}
		expect(incorrectDirection).toThrow()
	})
});