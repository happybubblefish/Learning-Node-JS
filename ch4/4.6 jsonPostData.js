var http = require('http');

//curl -s -X POST -H 'Content-Type: application/json' -d '{ "firstname": "Jack", "phone": 123456789 }' http://localhost:8180/albumadfjl

http
    .createServer(handle_incoming_request)
    .listen(8180);

function handle_incoming_request(req, res){
    console.log('Incoming request: (' + req.method + ')' + req.url);

    var json_data = '';

    req.on(
        "readable",
        () => {
            var d = req.read();
            if(typeof d == 'string'){
                json_data += d;
            } else if(typeof d == 'object' && d instanceof Buffer){
                json_data += d.toString('utf-8');
            }
        }
    );

    req.on(
        "end",

        () => {
            var output = '';
            if(!json_data || json_data.length == 0){
                output = 'I don\'t have any JSON';
            } else{
                var json;
                try{
                    json = JSON.parse(json_data);
                } catch(e){

                }

                if(!json){
                    output = 'Invalid JSON';
                } else{
                    output = 'I received valid JSON: ' + json_data;
                }
            }

            res.end(output);
        }
    );
}

