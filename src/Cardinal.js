var South = {
		name: "South",
		rotate: function(direction){
			if(direction === "L"){
				return Cardinals.E
			} else {
				return Cardinals.W
			}
		}
	},
	West = {name: "West",
		rotate: function(){}
	},
	East = {name: "East",
		rotate: function(direction){
			if(direction === "L"){
				return Cardinals.N
			} else {
				return Cardinals.S
			}
		}
	},
	North = {
		name: "North",
		rotate: function(direction){
			if(direction === "L"){
				return Cardinals.W
			} else {
				return Cardinals.E
			}
		}
	}
var Cardinals = {
	N: North, E: East, W: West, S: South,
	isValid: function(cardinal){
		return 	cardinal.name === "North" || cardinal.name === "South" || 
				cardinal.name === "East" || cardinal.name === "West"
	}
}
Object.freeze(Cardinals)