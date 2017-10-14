//Declare new Object
var obj1 = new Object();
var obj2 = {};
var person = { firstName: 'Jack', lastName: 'Tom' };
console.log(person);    //{ firstName: 'Jack', lastName: 'Tom' }
person.birthday = '06-19-2007';
console.log(person);    //{ firstName: 'Jack', lastName: 'Tom', birthday: '06-19-2007' }
console.log(person.firstName);  //Jack
console.log(person['firstName']);   //Jack
console.log(person.email);  //undefined

//Another way to add new property
var field = 'animal';
person[field] = 'cat';
console.log(person);    //{ firstName: 'Jack', lastName: 'Tom', birthday: '06-19-2007', animal: 'cat' }

//The structure of JSON is very similar to the object, except JSON needs to quote the "key" part (better to use double quotes)
var json = { "firstName": 'Json-Jack', "lastName": 'Json-Tom' };
console.log(json);  //{ firstName: 'Json-Jack', lastName: 'Json-Tom' }

//Delete property
delete person.birthday;
console.log(person);    //{ firstName: 'Jack', lastName: 'Tom', animal: 'cat' }

//Get number of object's property
console.log(person.length); //undefined
console.log(Object.keys(person).length); //3