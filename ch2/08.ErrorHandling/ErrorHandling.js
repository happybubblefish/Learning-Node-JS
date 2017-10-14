function uhoh(){
    throw new Error('Badd!');
}

try{
    uhoh();
} catch(e){
    console.log('I got an error: ' + e.message); //Badd!
}