var fs = require('fs');
var buf = new Buffer(100000);

fs.open('test2.txt', 'r', (err, handle) => {
    if(err){
        console.log('Error: ' + err.code + '(' + err.message + ')');    //Error: ENOENT(ENOENT: no such file or directory, open 'test2.txt')
    } else{
        fs.read(handle, buf, 0, 100000, null, (err, length) => {
            if(err){
                console.log('Error: ' + err.code + '(' + err.message + ')');
            } else{
                console.log(buf.toString('utf-8', 0, length));
                fs.close(handle, () => {});
            }
        });
    }
});