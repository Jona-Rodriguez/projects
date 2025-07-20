const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

//LWL 37 - 38

const server = http.createServer((req, res) => {
  // We have to create the server before we can start doing things
  const readWrite = (file,contentType) => {
    fs.readFile(file, function(err, data) {
      res.writeHead(200, {'Content-Type': contentType});
      res.write(data);
      res.end();
    });
  }
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);

  switch(page){
    case '/':
      readWrite('index.html', 'text.html');
      break;
    case '/otherpage':
      readWrite('otherpage.html', 'text/html');
      break;
    case '/otherotherpage':
      readWrite('otherotherpage.html', 'text/html');
      break;
    case '/api':
      let personName = 'unknown'
      let personOccupation = 'unknown'
      let personStatus = 'unknown'
      if(params['student']== 'leon'){
        personName = 'leon'
        personOccupation = 'Boss Man'
        personStatus = 'Baller'
      }
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: personName,
          status: personOccupation,
          currentOccupation: personStatus
        }
        res.end(JSON.stringify(objToJson));
        break;
    case '/css/style.css':
          fs.readFile('css/style.css', function(err, data) {
            res.write(data);
            res.end();
          });
          break;
    case '/js/main.js':
      fs.readFile('js/main.js', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
      });
          break;
    default: 
      figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
    break;
  }// Switch
});// server
server.listen(8000);
