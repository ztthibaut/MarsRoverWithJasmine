describe("Position", function(){
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
		expect(incorrectCardinal).toThrow()
	})
});