var express = require('express');
var fs = require('fs');
var app = express();

// Get
app.get('/api/:filename', function(req, res) {
  fs.readFile('./data/' + req.params.filename, function(err, json){
    if(err) res.sendStatus(500);
      res.send(json.toString());
      //res.json(data);
  });
});

// Post
app.post('/api/:filename', function(req, res) {
  var data = {"user": [{"name": "James"},{"name": "Matt"}]};
  var path = './data/' + req.params.filename;
  if(fs.existsSync(path)) {
    res.send("File already exists!");
    return;
  }
  fs.writeFile(path, JSON.stringify(data), function(err) {
    if(err) res.sendStatus(500);
    res.sendStatus(200);
  });
});

// Put
app.put('/api/:filename', function(req, res) {
  var data = {"user": [{"name": "James"},{"name": "Matt"}]};
  var path = './data/' + req.params.filename;
  fs.writeFile(path, JSON.stringify(data), function(err) {
    if(err) res.sendStatus(500);
    res.sendStatus(200);
  });
});

// Delete
app.delete('/api/:filename', function(req, res) {
  var path = './data/' + req.params.filename;
  if(!fs.existsSync(path)) {
    res.send("File doesn't exist!");
    return;
  }
  fs.unlink(path, function(err) {
    if(err) res.sendStatus(500);
      res.sendStatus(200);
  });
});


//app.listen(3000, function() {
//  console.log("Server started");
//});

app.listen(process.env.PORT || 8888, function(){
  console.log("starting server on port: ", 8888);
});


