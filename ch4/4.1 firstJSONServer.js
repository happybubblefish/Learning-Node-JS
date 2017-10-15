var http = require('http'),
    fs = require('fs');

function load_album_list(callback){
    fs.readdir('albums', (err, files) => {
        if(err){
            callback(err);
        } else{
            callback(null, files);
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