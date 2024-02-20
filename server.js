const http = require('http');

let requestCount = 0

const server = http.createServer((req,res) => {
     if (req.url === '/favicon.ico') {
        res.writeHead(200, { 'Content-Type': 'image/x-icon' });
        res.end();
        return;
     }
    requestCount++

switch(req.url) {
    case '/students': 
    res.write("students" + requestCount) 
    break;
    case "/cours": 
    res.write("front+back")
    break;
    default:
        res.write ('Not found ')
}

    console.log(requestCount)
    res.end()
})

server.listen(3003)