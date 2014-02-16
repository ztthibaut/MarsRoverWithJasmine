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
			myYCoordinate = this.getYCoordinate() - 1
		} else if(this.getCardinal() === Cardinals.E) {
			myXCoordinate = this.getXCoordinate() + 1
		} else {
			myXCoordinate = this.getXCoordinate() - 1
		}
	}
	this.getWarning = function(){
		return {
			name: "invalid move",
			description: "one of the provided moves is invalid. The rover stayed in the last valid position"
		}
	}
}