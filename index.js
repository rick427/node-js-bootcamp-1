const fs = require('fs');
const http = require('http');
const url = require('url');


/***************************FILES SYSTEMS*****************************/
/*Blocking Synchronous Way*/
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `This is what we know about the avocado: ${textIn}.\n Created on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written successfully')


/*Non-Blocking asynchronous way*/
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     if(err) return console.log('Error');
    
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//        console.log(data2);
//        fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//          console.log(data3);
//          fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//              console.log('Your File has been written.');   
//          });
//        });
//     })
// });
// console.log('This will read file first');


/*****************************SERVER**************************************/
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObject = JSON.parse(data);

const server = http.createServer((req, res) => {
    const pathName = req.url

    if(pathName === '/' || pathName === '/overview'){
        res.end('This is the overview');
    }

    else if(pathName === '/product'){
        res.end('This is the product')
    }

    else if(pathName === '/api'){
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(data);
    }
    else{
        res.writeHead(404, {'Content-type': 'text/html'});
        res.end('<h3>Page Not Found!!</h3>')
    }
});
const port = 5000;
server.listen(port, '127.0.0.1', () => {
    console.log(`Listening to request on port ${port}`)
});