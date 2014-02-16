describe("Plateau", function(){
	it("has set dimensions", function(){
		var plateau = new Plateau(4, 5)
		expect(plateau.getXDimension()).toEqual(4)
		expect(plateau.getYDimension()).toEqual(5)
	})
	it("has another set dimensions", function(){
		var plateau = new Plateau(1, 2)
		expect(plateau.getXDimension()).toEqual(1)
		expect(plateau.getYDimension()).toEqual(2)
	})
})