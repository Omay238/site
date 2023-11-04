exports.specials = {
  "/projects": function(req, res, fs, nunjucks){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./projects.json', function(err, data) {
      return res.end(nunjucks.render('projects/index.html', JSON.parse(data)));
    });
  },
	"/projects/sprig": function(req, res, fs, nunjucks){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./games.json', function(err, data) {
      return res.end(nunjucks.render('projects/sprig.html', JSON.parse(data)));
    });
  }
};