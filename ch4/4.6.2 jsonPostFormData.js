var http = require('http'),
    qs = require('querystring');

//curl -s -X POST --data 'field1=123&field2=supervalue' http://localhost:8180/alksjdlfajs

http
    .createServer(handle_incoming_request)
    .listen(8180);

function handle_incoming_request(req, res){
    console.log('Incoming request: (' + req.method + ')' + req.url);

    var form_data = '';

    req.on(
        "readable",
        () => {
            var d = req.read();
            if(typeof d == 'string'){
                form_data += d;
            } else if(typeof d == 'object' && d instanceof Buffer){
                form_data += d.toString('utf-8');
            }
        }
    );

    req.on(
        "end",

        () => {
            var output = '';
            if(!form_data || form_data.length == 0){
                output = 'I don\'t have any JSON';
            } else{
                var obj = qs.parse(form_data);

                if(!obj){
                    output = 'No valid form data.';
                } else{
                    output = 'I got valid form data ' + JSON.stringify(obj);
                }
            }

            res.end(output);
        }
    );
}

