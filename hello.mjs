import { createServer } from 'http';

createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('wonderful!');
}).listen(8080);
