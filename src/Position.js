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
		rotate: function(){}
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
	} ;
var Cardinals = {
	N: North, E: East, W: West, S: South,
	isValid: function(cardinal){
		return 	cardinal.name === "North" || cardinal.name === "South" || 
				cardinal.name === "East" || cardinal.name === "West"
	}
}
Object.freeze(Cardinals)

function Position(xCoordinate, yCoordinate, cardinal){
	var myXCoordinate = xCoordinate
	var myYCoordinate = yCoordinate
	if(!Cardinals.isValid(cardinal)){
		throw{
			name: "Incorrect Cardinal",
			message: "An incorrect cardinal direction was provided"
		}
	}
	var myCardinal = cardinal

	this.getXCoordinate = function(){
		return myXCoordinate
	}
	this.getYCoordinate = function(){
		return myYCoordinate
	}
	this.getCardinal = function(){
		return myCardinal
	}
	this.move = function(direction){
		if(direction === "M"){
			this.aMove()
		} else {
			myCardinal = myCardinal.rotate(direction)
		}
	}
	this.aMove = function(){
		if(this.getCardinal() === Cardinals.N){
			myYCoordinate = this.getYCoordinate() + 1
		} else if(this.getCardinal() === Cardinals.S){
			myYCoordinate = this.getYCoordinate() - 1
		} else if(this.getCardinal() === Cardinals.E) {
			myXCoordinate = this.getXCoordinate() + 1
		} else {
			myXCoordinate = this.getXCoordinate() - 1
		}
	}
}