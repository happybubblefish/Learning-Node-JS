
function Greeter(lang){
    this.lang = lang;

    this.greet = function(){
        switch(this.lang) {
            case 'en': return 'Hello!';
            case 'fr': return 'Bonjour!';
            case 'it': return 'Ciao!';
            default: return 'Don\'t speak that sory.';
        }
    }
}

exports.hello_world = function(){
    console.log('Hello world!');
}

exports.goodbye = function(){
    console.log('Good bye, baby!');
}

exports.create_greeter = function(lang){
    return new Greeter(lang);
}