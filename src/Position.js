var Cardinals = {
	N:"North", S:"South", E:"East", W:"West",
	isValid: function(cardinal){
		return 	cardinal === "North" || cardinal === "South" || cardinal === "East" || cardinal === "West"
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
		if(this.getCardinal() === Cardinals.N){
			myYCoordinate = this.getYCoordinate() + 1
		} else {
			myYCoordinate = this.getYCoordinate() - 1
		}
	}
}