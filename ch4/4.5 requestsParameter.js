var http = require('http'),
    fs = require('fs'),
    url = require('url');

function load_album_list(callback){
    fs.readdir('albums', (err, files) => {
        if(err){
            callback(err);
        } else{
            var only_dirs = [];

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
            }

            iterator(0);
        }
    });
}

function load_album(album_name, page, page_size, callback){
    console.log('album_name: ' + album_name);
    fs.readdir('albums/' + album_name, (err, files) => {
        if(err){
            if(err.code == 'ENOENT'){
                callback(make_error('no_such_album', 'That album doesn\'t exist.'));
            } else{
                callback(make_error('can\'_load_photos', 'The server is broken'));
            }
        } else{
            var only_files = [];
            var path = `albums/${album_name}/`;

            console.log('path: ' + path);
            console.log('files size: ' + files.length);
            
            var iterator = (index) => {
                if(index == files.length){
                    var start = page * page_size;
                    var output = only_files.slice(start, start + page_size);

                    var obj = { short_name: album_name,
                                photos: output };
                    callback(null, obj);
                } else{
                    fs.stat(path + files[index], (err, stats) => {
                        if(err){
                            console.log('err: ' + err.message);
                            return;
                        }

                        if(!err && stats.isFile()){
                            only_files.push(files[index]);
                        }

                        iterator(index + 1);
                    });
                }
            };

            iterator(0);
        }
    });
}

function handle_incoming_request(req, res) {
    //parsed_url can be name randomly
    req.parsed_url2 = url.parse(req.url, true);
    var core_url = req.parsed_url2.pathname;

    console.log('INCOMING REQUEST: ' + req.method + ' ' + core_url);

    if(core_url == '/albums.json'){
        handle_load_album_list(req, res);
    } else if(core_url.substr(0, 7) == '/albums' && core_url.substr(core_url.length - 5) == '.json'){
        handle_load_album(req, res);
    } else{
        send_failure(res, 404, { code: 'no_such_page', message: 'No such page' });
    }
}

function handle_load_album_list(req, res){
    load_album_list((err, albums) => {
        if(err){
            send_failure(res, 500, { code: 'can\'t_load_albums', 
                                     message: err.message });
        } else{
            send_success(res, { albums: albums });
        }
    });
}

function handle_load_album (req, res) {
    var getp = req.parsed_url2.query;
    var page_num = getp.page ? parseInt(getp.page) : 0;
    var page_size = getp.page_size ? parseInt(getp.page_size) : 1000;

    if(isNaN(page_num)){
        page_num = 0;
    }

    if(isNaN(page_size)){
        page_size = 1000;
    }

    var core_url = req.parsed_url2.pathname;

    load_album(core_url.substring(8, core_url.length - 5), page_num, page_size, (err, photos) => {
        if(err){
            send_failure(res, 500, err);
        } else{
            send_success(res, photos);
        }
    });
}

var s = http.createServer(handle_incoming_request);
s.listen(8180);

function make_error(code, msg){
    var e = new Error(msg);
    e.code = code;
    return e;
}

function make_resp_error(err){
    return JSON.stringify({ code: (err.code) ? err.code : err.name,
                            message: err.message });
}

function send_success(res, data){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var output = { error: null, data: data };
    res.end(JSON.stringify(output) + '\n');
}

function send_failure(res, server_code, err){
    var code = (err.code) ? err.code : err.name;
    res.writeHead(server_code, { 'Content-Type': 'application/json' });
    res.end(make_resp_error(err));
}