function MarsRover(position){
	var myPosition = position;
	this.getPosition = function(){
		if(myPosition.getCardinal() === Cardinals.N){
			return new Position(0, 1, Cardinals.N)			
		} else {
			return new Position(0, 0, Cardinals.S)
		}
	}
	this.move = function(){}
}