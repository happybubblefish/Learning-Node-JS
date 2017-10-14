var fs = require('fs');

function FileObject(){
    this.filename = '';

    this.file_exists = function(callback){
        var self = this;
        console.log('About to open: ' + self.filename);

        //when use function(err, handle){} instead of (err, handle) => {}, must declare var self = this to avoid this reference error
        //arrow function fixes this problem, so there is no need to use self
        fs.open(self.filename, 'r', function(err, handle) {
            if(err){
                console.log('Can\'t open: ' + self.filename);
                callback(err);
            } else{
                fs.close(handle);
                callback(null, true);
            }
        });
    }
}

var fo = new FileObject();
fo.filename = 'ajsdlf1.txt';
fo.file_exists((err, exists) => {
    if(err){
        console.log('error');
        return;
    }
})
