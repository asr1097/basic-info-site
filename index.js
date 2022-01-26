const http = require("http");
const fs = require("fs");
const { URL } = require("url");

const port = parseInt(process.env.PORT) || 8080;

http.createServer((req, res) => {
    let urlString = "https://" + req.headers.host + req.url;
    let url = new URL(urlString);
    
    switch(url.href){
        case `${url.origin}/`:
            fs.readFile("./index.html", (err, data) => {
                if(err){console.log(err)}
                else{
                    res.writeHead(200, {"Content-Type": "text/html"});
                    res.write(data);
                    res.end();
                };
            });
            break;

        case `${url.origin}/about`:
            fs.readFile("./about.html", (err, data) => {
                if(err){console.log(err)}
                else{
                    res.writeHead(200, {"Content-Type": "text/html"});
                    res.write(data);
                    res.end();
                };
            });
            break;
        
        case `${url.origin}/contact-me`:
            fs.readFile("./contact-me.html", (err, data) => {
                if(err){console.log(err)}
                else{
                    res.writeHead(200, {"Content-Type": "text/html"});
                    res.write(data);
                    res.end();
                };
            });
            break;

        default:
            fs.readFile("./404.html", (err, data) => {
                if(err){console.log(err)}
                else{
                    res.writeHead(404, {"Content-Type": "text/html"});
                    res.write(data);
                    res.end();
                };
            });
            break;
    }

}).listen(port);