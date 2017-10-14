//escape
console.log('Tom\'s mom');  //Tom's mom
console.log("Jack\"s dad"); //Jack"s dad
console.log("Alice's boy friend");  //Alice's boy friend
console.log('Hmmm", is this strange?'); //Hmmm", is this strange?
console.log("Tomorrow".length); //8

//Below code will throw exception
// var x;
// console.log(x.length);
// x = null;
// console.log(x.length);

//concatenation
console.log("Cat " + "like " + "fish.");    //Cat like fish.
console.log(5 + 3 + " Yeah!");  //8 Yeah!
console.log('' + 5 + 3 + " Yeah!"); //53 Yeah!

//indexOf
console.log('five guys'.indexOf('guys'));   //5
console.log('big fish'.indexOf('tank'));    //-1

//substr, slice and substring
console.log('Beautiful house'.substr(5, 3));    //ifu
console.log('Beautiful house'.slice(5, 8)); //ifu
console.log('Beautiful house'.substring(5));    //iful house
console.log('Beautiful house'.substring(5, 8));    //ifu

//split
console.log('a,b,c'.split(','));    //[ 'a', 'b', 'c' ]

//trim
console.log('   asdklk  alsdj p'.trim());   //asdklk  alsdj p

//regex
console.log(/[abc]{1, 3}/); // /[abc]{1, 3}/
console.log(new RegExp('[abc]{1, 3}')); // /[abc]{1, 3}/
console.log('There is aa narrow bridge.'.search(/[abc]{1,3}/)); // 9
console.log('There is a narrow bridge.'.search(/[abc]{1, 3}/)); // -1   ======> no space between range numbers

//replace
console.log('There is aaa narrow bridge.'.replace(/[abc]{1,2}/, 'bbb'));    //There is bbba narrow bridge.
