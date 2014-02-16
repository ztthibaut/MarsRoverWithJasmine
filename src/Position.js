function Position(xCoordinate, yCoordinate, cardinal, plateau){
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
		for(var j = 0; j < direction.length; j++){
			this.aMove(direction.substr(j, 1))
		}
	}
	this.aMove = function(direction){
		if(direction === "M"){
			this.aMoveForward()
		} else if(direction === "L" || direction === "R"){
			myCardinal = myCardinal.spin(direction)
		} else {
			throw{
				name: "Incorrect movement",
				message: "An incorrect movement, " + direction + " was provided"
			}
		}
	}
	this.aMoveForward = function(){
		if(this.getCardinal() === Cardinals.N){
			var nextYCoordinate = this.getYCoordinate() + 1
			if(nextYCoordinate <= plateau.getYDimension()){
				myYCoordinate = nextYCoordinate
			}
			
		} else if(this.getCardinal() === Cardinals.S){
			var nextYCoordinate = this.getYCoordinate() - 1
			if(nextYCoordinate >= 0){
				myYCoordinate = nextYCoordinate
			}
		} else if(this.getCardinal() === Cardinals.E) {
			var nextXCoordinate = this.getXCoordinate() + 1
			if(nextXCoordinate <+ plateau.getXDimension()){
				myXCoordinate = nextXCoordinate
			}
		} else {
			var nextXCoordinate = this.getXCoordinate() - 1
			if(nextXCoordinate >= 0){
				myXCoordinate = nextXCoordinate
			}
		}
	}
	this.getWarning = function(){
		return {
			name: "invalid move",
			description: "one of the provided moves is invalid. The rover stayed in the last valid position"
		}
	}
}