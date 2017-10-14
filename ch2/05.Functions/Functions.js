//Javascript does not do parameter validation
function hello(name){
    console.log('Hello ' + name + '!');
}

hello('Jack');  //Hello Jack!
hello();    //Hello undefined!
hello(123, 'Jack'); //Hello 123!

//arguments built-in javascript variable
function hello2(){
    console.log(arguments);
}

hello2(323, 'Tom', true);   //{ '0': 323, '1': 'Tom', '2': true }

//1. () -- use default value
//2. (number) -- cache size only
//3. (object) -- replace the default object

function init_cache(){
    var init_data = {
        cache_size: 10,
        location: '/tmp',
        type: 'btree'
    };

    var a = arguments;

    for(var i = 0; i < a.length; i++){
        if(typeof(a[i]) == 'number'){
            init_cache.cache_size = a[i];
            console.log('cache_size is ' + init_cache.cache_size);
        } else if(typeof(a[i]) == 'object'){
            init_data = a[i];
            console.log('init_data is ' + init_data.cache_size + ' ' + init_data.location + ' ' + init_data.type);
        } else{
            throw new Error('bad params to init_data');
        }
    }
}

init_cache();
init_cache(200);    //cache_size is 200
init_cache({    //init_data is 100 /tmp2 ctree
    cache_size: 100,
    location: '/tmp2',
    type: 'ctree'
});
init_cache(300, {    //cache_size is 300, init_data is 200 /tmp3 dtree
    cache_size: 200,
    location: '/tmp3',
    type: 'dtree'
});

//Anonymous function
//Downside is when get error, no function name will be shown on the console
var x = function(a, b){
    return a * b;
}

console.log(x(3, 5));   //15

var y = function(){
    throw new Error('You got an error!');
}
//y();    //at y (/Users/k26615/Documents/NodeJS/livelessons/ch2/05.Functions/Functions.js:65:11)

var z = function errorFunction(){
    throw new Error('You got an error!');
}
// z();    //at errorFunction (/Users/k26615/Documents/NodeJS/livelessons/ch2/05.Functions/Functions.js:70:11)

//scope
var pets = 'cat';   //global variable
var callPets = function(){
    var pets = 'dog';   //local variable, will shadow the value of global variable
    console.log(pets);
}

callPets(); //dog
console.log(pets);  //cat