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
	it("throws error when negative x-dimension is provided", function(){
		var giveNegativeXDimension = function(){
			new Plateau(-1, 5)
		}
		expect(giveNegativeXDimension).toThrow({
			name: "Incorrect dimension provide for plateau",
			message: "The x-dimension -1 is not a valid plateau dimension"
		})
	})
	it("throws error when negative y-dimension is provided", function(){
		var giveNegativeXDimension = function(){
			new Plateau(1, -5)
		}
		expect(giveNegativeXDimension).toThrow({
			name: "Incorrect dimension provide for plateau",
			message: "The y-dimension -5 is not a valid plateau dimension"
		})
	})
})