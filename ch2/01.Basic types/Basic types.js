
//undefined means no value is assigned to the variable
var x;
console.log('x is ' + x);

//null is a value
x = null;
console.log('x is ' + x);

//object, ask for an invalid property on x
x = {};
console.log('x\' abc property is ' + x.abc);

//get type of a variable
console.log('The type of x is ' + typeof(x));
console.log('The type of a string is ' + typeof('Hello'));
console.log('The type of a function is ' + typeof(function() { console.log('Hi, I am a function.') }));

//number, range from (-(2^53 - 1)) to (2^53 - 1)
//for the irrational value, value larger than 2^53, or even floating operations, will be represented as approximation
console.log(typeof(38236));
console.log(0.1 + 0.2);     //0.30000000000000004
console.log(0.2 == 0.2);    //true
console.log(1 - 0.3 + 0.2 == 0.9);  //false
console.log(1 - 0.3 + 0.2); //.8999999999999999
console.log(1 / 2); //0.5
console.log(3 / 2); //1.5 instead of 1
console.log(4 / 2); //2 instead of 2.0
console.log(Math.ceil(10 / 3)); //4
console.log(Math.floor(10 / 3));    //3
console.log(1 / 0); //Infinity instead of throws an exception
console.log(-1 / 0); //-Infinity
console.log(1 / 0 == Infinity); //true
console.log(parseInt('81794823704891723473423'));   //8.179482370489173e+22
console.log(parseInt('256'));   //256
console.log(parseInt('28371.63'));  //28371
console.log(parseFloat('129')); //129 instead of 129.0
console.log(parseInt('zoo'));   //NaN
console.log(isNaN(parseInt('monkey'))); //true
console.log(parseFloat('girl') == parseInt('boy')); //false instead of true
console.log(NaN == NaN);    //false
console.log(isFinite(100)); //true
console.log(isFinite(NaN)); //false
console.log(isFinite(null)); //true   
console.log(isFinite(undefined));   //false
console.log(isFinite(Infinity));    //false
console.log(isFinite(Math.pow(10, 530) * 1000000000000000000000000000000000000000000000000000000));   //false
console.log(Math.pow(10, 530) * 1000000000000000000000000000000000000000000000000000000);   //Infinity

//Boolean
//false, 0, '', NaN, null, undefined ===> false
console.log(Boolean("79239178"));   //true
console.log(Boolean(undefined));    //false
console.log(Boolean(null)); //false
console.log(Boolean(NaN));  //false
console.log(Boolean(Infinity)); //true
console.log(Boolean(''));   //false
console.log(Boolean(0));    //false