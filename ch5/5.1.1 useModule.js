var module = require('./5.1 createModule');

module.hello_world();

module.goodbye();

var greeter = module.create_greeter('fr');

console.log(greeter.greet());
