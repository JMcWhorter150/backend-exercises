const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    console.log("Oh wow, I got a request.....")
    console.log(req.url);
    console.log(req.method);

    let url = req.url;
    if (url === "/"){
        url = '/index.html';
    }
    // Read the HTML file's contents so we can send it in the Response
    fs.readFile(`${__dirname}/public${url}`, (error, buf) => {
        if (error) {
            console.log(error);
            res.writeHead(404, {
                'Content-type': 'text/html'
            });

            res.end('<h1>File not found</h1>');
        } else {
            res.writeHead(200, {
                "Content-Type": 'text/html'
            })

            const contents = buf.toString();
            res.end(contents);
        }
    });




    // res.end(`<h1>OMG IT WORKS!!!!</h1>`);
});

server.listen(3000, () => {
    console.log("!!!!!")
});