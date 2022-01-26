const http = require("http");
const fs = require("fs");
const { URL } = require("url");

http.createServer((req, res) => {
    let urlString = "http://" + req.headers.host + req.url;
    let url = new URL(urlString);
    console.log(url)
    switch(url.pathname){
        case "/":
            fs.readFile("./index.html", (err, data) => {
                if(err){console.log(err)}
                else{
                    res.writeHead(200, {"Content-Type": "text/html"});
                    res.write(data);
                    res.end();
                };
            });
            break;

        case "/about":
            fs.readFile("./about.html", (err, data) => {
                if(err){console.log(err)}
                else{
                    res.writeHead(200, {"Content-Type": "text/html"});
                    res.write(data);
                    res.end();
                };
            });
            break;
        
        case "/contact-me":
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

}).listen(8080);