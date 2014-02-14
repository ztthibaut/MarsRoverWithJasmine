var Directions = {
	N:"North", S:"South", E:"East", W:"West",
	isValid: function(direction){
		return 	direction === "North" || direction === "South" || direction === "East" || direction === "West"
	}
}
Object.freeze(Directions)

function Position(xCoordinate, yCoordinate, direction){
	var myXCoordinate = xCoordinate
	var myYCoordinate = yCoordinate
	if(!Directions.isValid(direction)){
		throw{
			name: "Incorrect Direction",
			message: "An incorrect direction was provided"
		}
	}
	var myDirection = direction

	this.getXCoordinate = function(){
		return myXCoordinate
	}
	this.getYCoordinate = function(){
		return myYCoordinate
	}
	this.getDirection = function(){
		return myDirection
	}
}