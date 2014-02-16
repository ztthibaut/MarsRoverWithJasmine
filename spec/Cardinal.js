describe("Cardinal", function(){
	it("is updated correctly after turning left when facing North", function(){
		var myCardinal = Cardinals.N
		var cardinalAfter = myCardinal.spin("L")
		expect(cardinalAfter).toEqual(Cardinals.W)
	})
	it("is updated correctly after turning right when facing North", function(){
		var myCardinal = Cardinals.N
		var cardinalAfter = myCardinal.spin("R")
		expect(cardinalAfter).toEqual(Cardinals.E)
	})
	it("is updated correctly after turning left when facing South", function(){
		var myCardinal = Cardinals.S
		var cardinalAfter = myCardinal.spin("L")
		expect(cardinalAfter).toEqual(Cardinals.E)
	})
	it("is updated correctly after turning right when facing South", function(){
		var myCardinal = Cardinals.S
		var cardinalAfter = myCardinal.spin("R")
		expect(cardinalAfter).toEqual(Cardinals.W)
	})
	it("is updated correctly after turning left when facing East", function(){
		var myCardinal = Cardinals.E
		var cardinalAfter = myCardinal.spin("L")
		expect(cardinalAfter).toEqual(Cardinals.N)
	})
	it("is updated correctly after turning right when facing East", function(){
		var myCardinal = Cardinals.E
		var cardinalAfter = myCardinal.spin("R")
		expect(cardinalAfter).toEqual(Cardinals.S)
	})
	it("is updated correctly after turning left when facing West", function(){
		var myCardinal = Cardinals.W
		var cardinalAfter = myCardinal.spin("L")
		expect(cardinalAfter).toEqual(Cardinals.S)
	})
	it("is updated correctly after turning right when facing West", function(){
		var myCardinal = Cardinals.W
		var cardinalAfter = myCardinal.spin("R")
		expect(cardinalAfter).toEqual(Cardinals.N)
	})
})