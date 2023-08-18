const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end(`You're on the homepage`)
    }
    if(req.url === '/about'){
        res.end('This is the about page')
    }
    // res.write("Spero's first server alone")
    res.end("<h4>OOops 404 <h4/>")
})

server.listen(3000)