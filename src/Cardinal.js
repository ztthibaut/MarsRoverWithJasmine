var South = {
		name: "South",
		spin: function(direction){
			if(direction === "L"){
				return Cardinals.E
			} else {
				return Cardinals.W
			}
		}
	},
	West = {name: "West",
		spin: function(direction){
			if(direction === "L"){
				return Cardinals.S
			} else if(direction === "R"){
				return Cardinals.N
			} else {
				throw{
					name: "Incorrect movement",
					message: "An incorrect movement, " + direction + " was provided"
				}
			}
		}
	},
	East = {name: "East",
		spin: function(direction){
			if(direction === "L"){
				return Cardinals.N
			} else {
				return Cardinals.S
			}
		}
	},
	North = {
		name: "North",
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
		return 	cardinal.name === "North" || cardinal.name === "South" || 
				cardinal.name === "East" || cardinal.name === "West"
	}
}
Object.freeze(Cardinals)