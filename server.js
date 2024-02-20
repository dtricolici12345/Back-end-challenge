const http = require('http');

let requestCount = 0

const server = http.createServer((req,res) => {
    requestCount++

switch(req.url) {
    case '/students': 
    res.write("students") 
    break;
    case "/cours": 
    res.write("front+back")
    break;
    default:
        res.write ('Not found ')
}

    res.write("  IT KAmasautra:" + requestCount )
    console.log(requestCount)
    res.end()
})

server.listen(3003)