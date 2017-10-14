//lamba expression
function add(a, b){
    return a + b;
}
console.log(add(2, 3)); //5

var add2 = (a, b) => a + b;
console.log(add2(10, 20));  //30

//array revisit
var arr = ['a', 'b', 'c'];
for(var i in arr){
    console.log(arr[i]);
}

//use 'of' instead of 'in' will access value directly
for(var val of arr){
    console.log(val);
}
