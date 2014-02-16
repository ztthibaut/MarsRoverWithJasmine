function MarsRover(position){
	var myPosition = position;
	this.getPosition = function(){
		return myPosition
	}
	this.move = function(direction){
		myPosition.move(direction)
	}
}