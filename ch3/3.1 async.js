var fs = require('fs');
var buf = new Buffer(100000);

//asyn calls
fs.open('test.txt', 'r', (err, handle) => {
    fs.read(handle, buf, 0, 100000, null, (err, length) => {
        console.log(buf.toString('utf-8', 0, length));
        fs.close(handle, () => {});
    });
});

