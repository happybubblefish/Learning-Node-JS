//global, process
global.firstName = 'Jack';
global.lastName = 'Tom';
global.email = 'jacktom@gmail.com'

function hi(key){
    console.log(key + ' value of global: ' + global[key]);
}

hi("firstName");    //firstName value of global: Jack

// process.exit(1);
console.log(process.env);
console.log(process.env.JAVA_HOME); ///Library/Java/JavaVirtualMachines/jdk1.8.0_66.jdk/Contents/Home