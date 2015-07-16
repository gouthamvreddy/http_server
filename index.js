var express = require('express');
var fs = require('fs');
var app = express();

app.get('/', function(req, res) {
  fs.readFile('./data/data1.json', function(err, json){
    if(err) res.send(500);
      res.send(json.toString());
  });
});


app.post('/', function(req, res) {
  var data = {"user": [{"name": "James"},{"name": "Matt"}]};
  var count = 1;
  while(fs.existsSync('./data/data' + count + '.json')) {
    count++;
  }
  var path = './data/data' + count + '.json';
  fs.writeFile(path, JSON.stringify(data), function(err) {
    if(err) res.sendStatus(500);
    res.sendStatus(200);
  });
});

app.put('/', function(req, res) {
  var data = {"user": [{"name": "Jane"},{"name": "Amelia"}]};
  var count = 1;
  while(fs.existsSync('./data/data' + count + '.json')) {
    count++;
  }
  var path = './data/data' + (count - 1) + '.json';
  fs.writeFile(path, JSON.stringify(data), function(err) {
    if(err) res.sendStatus(500);
    res.sendStatus(200);
  });
});


app.delete('/', function(req, res) {
  var count = 1;
  while(fs.existsSync('./data/data' + count + '.json')) {
    count++;
  }
  var path = './data/data' + (count - 1) + '.json';
  fs.unlink(path, function(err) {
    if(err) res.sendStatus(500);
    res.sendStatus(200);
  });
});

app.listen(process.env.PORT || 8888, function(){
  console.log("starting server on port: ", 8888);
});


