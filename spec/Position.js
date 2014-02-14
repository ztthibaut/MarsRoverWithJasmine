describe("Position", function(){
	it("has x,y coordinates & a direction", function(){
		var position = new Position(0, 1, "N")
		expect(position.getXCoordinate()).toBe(0)
		expect(position.getYCoordinate()).toBe(1)
		expect(position.getDirection()).toBe("N")
	})
});