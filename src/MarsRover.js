function MarsRover(position){
	var myPosition = position;
	this.getPosition = function(){
		if(myPosition.getCardinal() === Cardinals.N){
			return new Position(myPosition.getXCoordinate(), myPosition.getYCoordinate()+1, myPosition.getCardinal())			
		} else {
			return new Position(0, 0, Cardinals.S)
		}
	}
	this.move = function(){}
}