const http = require('node:http');

const PORT = 3000;
const HOSTNAME = 'localhost';

const server = http.createServer((req, res) => {
  if (req.url === '/about'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('About Page\n');
  } else if( req.url === '/contact'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('About Page\n');
  } else if (req.url === '/api'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const data = {
        message: 'Hello from API',
        timestamp: new Date().toISOString()
    };
    res.end(data.message + ' ' + data.timestamp);
  } else{
    res.statusCode = 200;
    res.end('Hello World!\n');
  }
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
