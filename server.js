const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type','application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if(req.url === '/api'){
        const rawData = fs.readFileSync('data.json');
        res.end(rawData);
     }
      else {
            res.statusCode = 404;
            res.end('not Found');
   }
});

const port = 3000;

server.listen(port, () => {
    console.log(`AI is running on localhost:${port}`)
})