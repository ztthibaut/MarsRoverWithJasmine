var South = {
		name: "S",
		spin: function(direction){
			if(direction === "L"){
				return Cardinals.E
			} else {
				return Cardinals.W
			}
		}
	},
	West = {name: "W",
		spin: function(direction){
			if(direction === "L"){
				return Cardinals.S
			} else {
				return Cardinals.N
			}
		}
	},
	East = {name: "E",
		spin: function(direction){
			if(direction === "L"){
				return Cardinals.N
			} else {
				return Cardinals.S
			}
		}
	},
	North = {
		name: "N",
		spin: function(direction){
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
		return 	cardinal.name === "N" || cardinal.name === "S" || 
				cardinal.name === "E" || cardinal.name === "W"
	}
}
Object.freeze(Cardinals)