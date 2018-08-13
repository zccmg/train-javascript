function Cal(startPoint) {
	
	this.value = startPoint

	this.add = function(val) {
		this.value += val
		return this
	}

	this.sub = function(val) {
		this.value -= val
		return this
	}


	this.mul = function(val) {
		this.value *= val
		return this
	}

	this.result = function() {
		return this.value;
	}

	return this
}

var cal = new Cal(3).add(3)
var cal2 = new Cal(10).add(4)

cal.add(5).sub(3).mul(2)
cal2.sub(3)


console.log("Result 1:", cal.result())
console.log("Result 2:", cal2.result())