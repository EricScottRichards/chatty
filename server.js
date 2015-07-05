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
	if(req.method == 'POST'){
		var postData = '';
		req.on('data', function(chunk){
			postData += chunk.toString();
		});
		req.on('end', function() {
			console.log("Got POST data:");
			console.log(JSON.parse(postData))
		})
	}
}
http.createServer(onRequest).listen(9090);