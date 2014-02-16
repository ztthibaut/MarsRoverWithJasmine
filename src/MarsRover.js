function MarsRover(position){
	var myPosition = position;
	this.getPosition = function(){
		return myPosition
	}
	this.move = function(direction){
		for(var j = 0; j < direction.length; j++){
			myPosition.move(direction.substr(j, 1))
		}
	}
}