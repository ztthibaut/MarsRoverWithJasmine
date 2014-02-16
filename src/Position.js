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
		for(var j = 0; j < direction.length; j++){
			this.aMove(direction.substr(j, 1))
		}
	}
	this.aMove = function(direction){
		if(direction === "M"){
			this.aMoveForward()
		} else {
			myCardinal = myCardinal.spin(direction)
		}
	}
	this.aMoveForward = function(){
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