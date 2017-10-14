var http = require('http');

http.createServer(function(req, res){
    var body = 'Hi, there!';
    res.writeHead(200, { 
        'Content-Length': body.length,
        'Content-Type': 'text/plain'
    });
    res.write(body);
    res.end();
}).listen(8180, function(){
    console.log('Server is listening at port 8180...');
});