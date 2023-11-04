const http = require('http');
const fs = require('fs');
const mime = require('mime');
const nunjucks = require('nunjucks');
const specials = require('./special').specials;

http.createServer(function (req, res) {
  if(req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    return res.end(nunjucks.render('index.html'));
  }else if(typeof specials[req.url] !== "undefined"){
    return specials[req.url](req, res, fs, nunjucks);
  }else if(mime.getType(req.url) === null){
    if(fs.existsSync("."+req.url+"/index.html")){
      res.writeHead(200, {'Content-Type': 'text/html'});
      return res.end(nunjucks.render("."+req.url+"/index.html"));
    }else if(fs.existsSync("."+req.url+".html")){
      res.writeHead(200, {'Content-Type': 'text/html'});
      return res.end(nunjucks.render("."+req.url+".html"));
    }
  }else{
    res.writeHead(200, {'Content-Type': mime.getType(req.url)});
    if(mime.getType(req.url) === 'text/html'){
      return res.end(nunjucks.render(req.url.substring(1)));
    }else{
      fs.readFile('./'+req.url, function(err, data) {
        return res.end(data);
      });
    }
  }
}).listen(8080);