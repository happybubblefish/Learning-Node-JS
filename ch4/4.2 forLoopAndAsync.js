var http = require('http'),
    fs = require('fs');

function load_album_list(callback){
    fs.readdir('albums', (err, files) => {
        if(err){
            callback(err);
        } else{
            var only_dirs = [];

            //For loop plus async combination usually do not work together very well
            // for(var i = 0; files && i < files.length; i++){
            //     fs.stat('albums/' + files[i], (err, stats) => {
            //         console.log('Inside of async ' + files[i]);
            //         if(stats.isDirectory()){
            //             only_dirs.push(files[i]);
            //         }
            //     });
            // }

            // console.log('Before outside callback');
            // callback(null, only_dirs);

            //This codes uses recursion to address the above problem
            //Before call callback function, finish all the async calls
            var iterator = (index) => {
                if(index == files.length){
                    callback(null, only_dirs);
                } else{
                    fs.stat('albums/' + files[index], (err, stats) => {
                        if(stats.isDirectory()){
                            only_dirs.push(files[index]);
                        }

                        iterator(index + 1);
                    });
                }
            };

            iterator(0);
        }
    });
}

http.createServer(function(req, res){
    console.log('INCOMING REQUEST: ' + req.method + ' ' + req.url);

    load_album_list((err, albums) => {
        if(err){
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ code: 'can\'t load albums', message: err.message }));
        } else{
            var output = { error: null, data: { albums: albums } };
            res.writeHead(200, { 'Content-Type': 'applicaiton/json '});
            res.end(JSON.stringify(output));
        }
    });
}).listen(8180);