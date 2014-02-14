function Position(xCoordinate, yCoordinate, direction){
	var myXCoordinate = xCoordinate
	var myYCoordinate = yCoordinate
	var myDirection = direction

	this.getXCoordinate= function(){
		return myXCoordinate
	}
	this.getYCoordinate= function(){
		return myYCoordinate
	}
	this.getDirection= function(){
		return myDirection
	}
}