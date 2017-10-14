//Create a new array
var arr1 = new Array();
var arr2 = [];
console.log(arr1.length);   //0
console.log(arr2.length);   //0

//The type of array is object instead of array
console.log(typeof(arr1));  //object

//To determine whether an object is an array, use Array.isArray()
console.log(Array.isArray(arr1));   //true
console.log(Array.isArray(arr2));   //true
console.log(Array.isArray({})); //false
console.log(Array.isArray('a'));    //false
console.log(Array.isArray(1));  //false

//Loop array
var animals = ['cat', 'dog', 'bird'];
console.log(animals);   //[ 'cat', 'dog', 'bird' ]
console.log(animals.length);    //3

for(var i = 0; i < animals.length; i++){    //cat, dog, bird
    console.log(animals[i]);
}

//Add new element
animals[animals.length] = 'monkey';
animals.push('donkey');
console.log(animals);   //[ 'cat', 'dog', 'bird', 'monkey', 'donkey' ]
animals[10] = 'tiger';
console.log(animals);   //[ 'cat', 'dog', 'bird', 'monkey', 'donkey', , , , , , 'tiger' ]

//Delete element
delete animals[2];  //Only replace animals[2] with undefined 
console.log(animals);   //[ 'cat', 'dog', , 'monkey', 'donkey', , , , , , 'tiger' ]
animals.splice(2, 2);   //Will actually remove the elements and the gap left will be filled up by the following elements
console.log(animals);   //[ 'cat', 'dog', 'donkey', , , , , , 'tiger' ]

//push() and pop() ===> add and remove from the end of the array
var nums = [1, 2, 3, 4, 5];
nums.push(10);
console.log(nums);  //[ 1, 2, 3, 4, 5, 10 ]
nums.pop();
console.log(nums);  //[ 1, 2, 3, 4, 5 ]

//unshift() and shift() ===> add and remove from the beginning of the array
nums.unshift(-10);
console.log(nums);  //[ -10, 1, 2, 3, 4, 5 ]
nums.shift();
console.log(nums);  //[ 1, 2, 3, 4, 5 ]

//join()
console.log('1,2,3,4,5'.split(','));    //[ '1', '2', '3', '4', '5' ]
console.log([1, 2, 3, 4, 5].join(':')); //1:2:3:4:5


//sort() ===> By default, the sort() function sorts values as strings
//To get a number array sorted correctly, passing a function as a parameter 
console.log([123, 12, 2, 8, 6].sort()); //[ 12, 123, 2, 6, 8 ]

function comparator(a, b){
    return a - b;
}
console.log([123, 12, 2, 8, 6].sort(comparator));   //[ 2, 6, 8, 12, 123 ]

function comparatorReverse(a, b){
    return b - a;
}
console.log([123, 12, 2, 8, 6].sort(comparatorReverse));   //[ 123, 12, 8, 6, 2 ]

function customCompareString(a, b){
    var a1 = a.toLowerCase();
    var b1 = b.toLowerCase();

    if(a1 < b1) return -1;
    if(a1 == b1) return 0;
    if(a1 > b1) return 1;
}

console.log(['Abc', 'Dcd', 'ab', 'zoo'].sort());   //[ 'Abc', 'Dcd', 'ab', 'zoo' ]
console.log(['Abc', 'Dcd', 'ab', 'zoo'].sort(customCompareString)); //[ 'ab', 'Abc', 'Dcd', 'zoo' ]

//forEach()
animals.forEach(function(val){  //cat~ dog~ donkey~ tiger~
    val += '~';
    console.log(val);
});

