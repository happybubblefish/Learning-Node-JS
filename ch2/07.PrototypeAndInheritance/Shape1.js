function Shape(){
    this.X = 0;
    this.Y = 0;

    //Need to create move function for each newly created object
    this.move = function(x, y){
        this.X = x;
        this.Y = y;
    }

    this.distance_from_origin = function(){
        return Math.sqrt(this.X * this.X + this.Y * this.Y);
    }
}

var shape = new Shape();
shape.move(10, 20);
console.log(shape.distance_from_origin());