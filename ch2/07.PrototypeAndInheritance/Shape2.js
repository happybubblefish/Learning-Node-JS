function Shape(){

}

Shape.prototype.X = 0;
Shape.prototype.Y = 0;

//No need to create move function for each newly created object
//All the object of type of Shape will have move function.
Shape.prototype.move = function(x, y){
    this.X = x;
    this.Y = y;
}

Shape.prototype.distance_from_origin = function(){
    return Math.sqrt(this.X * this.X + this.Y * this.Y);
}

Shape.prototype.area = function(){
    throw new Error('Need a 2d form!');
}

var shape = new Shape();
shape.move(10, 20);
console.log(shape.distance_from_origin());