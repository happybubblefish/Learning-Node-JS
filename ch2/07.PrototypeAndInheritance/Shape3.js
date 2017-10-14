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

var square = new Square();
square.move(5, 5);
square.Width = 20;
console.log(square.distance_from_origin()); //7.0710678118654755
console.log(square.area()); //400