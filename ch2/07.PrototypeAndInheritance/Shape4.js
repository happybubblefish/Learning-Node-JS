function Shape(){

}

Shape.prototype.X = 0;
Shape.prototype.Y = 0;

Shape.prototype.move = function(x, y){
    this.X = x;
    this.Y = y;
}

Shape.prototype.distance_from_origin = function(){
    return Math.sqrt(this.X * this.X + this.Y * this.Y);
}

function Square(){

}

Square.prototype = new Shape();
Square.prototype.__proto__ = Shape.prototype;
Square.prototype.Width = 0;

Square.prototype.area = function(){
    return this.Width * this.Width;
}

function Rectangular(){

}

Rectangular.prototype = new Square;
Rectangular.prototype.__proto__ = Square.prototype;
Rectangular.prototype.Height = 0;

Rectangular.prototype.area = function(){
    return this.Width * this.Height;
}

var shape = new Shape();
var square = new Square();

var rectangular = new Rectangular();
rectangular.move(10, 10);
console.log(rectangular.distance_from_origin());
rectangular.Width = 10;
rectangular.Height = 100;
console.log(rectangular.area());

console.log('=============');

console.log(square instanceof Shape);
console.log(square instanceof Square);
console.log(rectangular instanceof Shape);
console.log(rectangular instanceof Square);
console.log(square instanceof Rectangular);