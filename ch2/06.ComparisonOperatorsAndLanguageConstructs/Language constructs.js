//'==' ===> compare the values
//'===' ===> compare both the values and types
console.log(234 == '234');  //true
console.log(234 === '234'); //false
console.log('' == false == null == undefined == 0 );    //true
console.log(null == false); //false
console.log(null == undefined); //true
console.log(undefined == 0);    //false
console.log(false == undefined);    //false
console.log('' == false); //true
console.log(null === false)    //false
console.log(false == 0);    //true

//switch
function switchFunction (val){
    switch(val){
        case 'look':
            console.log('Look around');
            break;
        case 'check':
            console.log('Check out');
            break;
        default:
            console.log('Have fun');
    }
}

switchFunction('look'); //Look around

//bitwise operators: &, |, ^
console.log(1 & 1); //1
console.log(1 | 1); //1
console.log(1 ^ 1); //0

//Loop keys in object
var obj = { firstName: 'Jack', lastName: 'Tome', birthday: '10/20/2010' };
for(var key in obj){
    console.log(key);   //firstName, lastName, birthday
}