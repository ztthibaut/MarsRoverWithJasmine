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
		if(direction === "M"){
			this.aMove()
		} else if(direction === "L" && myCardinal === Cardinals.N){
			myCardinal = Cardinals.W
		} else if(direction === "R" && myCardinal === Cardinals.N){
			myCardinal = Cardinals.E
		} else if(direction === "L" && myCardinal === Cardinals.S){
			myCardinal = Cardinals.E
		} else {
			myCardinal = Cardinals.W
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