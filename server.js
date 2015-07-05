var http = require ('http');
var messages = ['shazam', 'aw yeah', 'ok'];
var onRequest = function(req,res){
	if(req.method === 'GET'){
		res.writeHead(200, {
			'Connection': 'close',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		});
		res.end(JSON.stringify(messages))
	}
}
http.createServer(onRequest).listen(9090);