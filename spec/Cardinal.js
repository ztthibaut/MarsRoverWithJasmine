describe("Cardinal", function(){
	it("is updated correctly after turning left when facing North", function(){
		var myCardinal = Cardinals.N
		var cardinalAfter = myCardinal.rotate("L")
		expect(cardinalAfter).toEqual(Cardinals.W)
	})
	it("is updated correctly after turning right when facing North", function(){
		var myCardinal = Cardinals.N
		var cardinalAfter = myCardinal.rotate("R")
		expect(cardinalAfter).toEqual(Cardinals.E)
	})
	it("is updated correctly after turning left when facing South", function(){
		var myCardinal = Cardinals.S
		var cardinalAfter = myCardinal.rotate("L")
		expect(cardinalAfter).toEqual(Cardinals.E)
	})
	it("is updated correctly after turning right when facing South", function(){
		var myCardinal = Cardinals.S
		var cardinalAfter = myCardinal.rotate("R")
		expect(cardinalAfter).toEqual(Cardinals.W)
	})
	it("is updated correctly after turning left when facing East", function(){
		var myCardinal = Cardinals.E
		var cardinalAfter = myCardinal.rotate("L")
		expect(cardinalAfter).toEqual(Cardinals.N)
	})
	it("is updated correctly after turning right when facing East", function(){
		var myCardinal = Cardinals.E
		var cardinalAfter = myCardinal.rotate("R")
		expect(cardinalAfter).toEqual(Cardinals.S)
	})
})