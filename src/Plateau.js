function Plateau(xDimension, yDimension){
	if(xDimension < 0){
		throw{
			name: "Incorrect dimension provide for plateau",
			message: "The x-dimension " + xDimension + " is not a valid plateau dimension"
		}
	}
	var myXDimension = xDimension
	if(yDimension < 0){
		throw{
			name: "Incorrect dimension provide for plateau",
			message: "The y-dimension " + yDimension + " is not a valid plateau dimension"
		}
	}
	var myYDimension = yDimension
	this.getXDimension =  function(){
		return myXDimension
	}
	this.getYDimension =  function(){
		return myYDimension
	}
}