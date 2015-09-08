var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// GET
app.get('/api/users/:username', function(req, res) {
  var path = './data/' + req.params.username + '.json';
  if(!fs.existsSync(path)) {
    res.send("File doesn't exists!");
    return;
  }
  fs.readFile(path, function(err, json){
    if(err) res.sendStatus(500);
    res.send(json.toString());
  });
});

// POST
app.post('/api/users/:username', function(req, res) {
  var data = {'name': req.body.name, 'email': req.body.email};
  var path = './data/' + req.params.username + '.json';
  if(fs.existsSync(path)) {
    res.send("File already exists!");
    return;
  }
  fs.writeFile(path, JSON.stringify(data), function(err) {
    if(err) res.sendStatus(500);
    res.sendStatus(200);
  });
});

// PUT
app.put('/api/users/:username', function(req, res) {
  var path = './data/' + req.params.filename;
  if(!fs.existsSync(path)) {
    res.send("File doesn't exists!");
    return;
  }
  fs.readFile(path, function(err, data){
    if(err) {
      res.sendStatus(500);
      return;
    }
    var newData = JSON.parse(data);
    newData.users.push({"name": "Laura"});
    fs.writeFile(path, JSON.stringify(newData), function(err) {
      if(err) res.sendStatus(500);
      res.sendStatus(200);
    })
  });
});

// DELETE
app.delete('/api/users/:username', function(req, res) {
  var path = './data/' + req.params.username + '.json';
  if(!fs.existsSync(path)) {
    res.send("File doesn't exist!");
    return;
  }
  fs.unlink(path, function(err) {
    if(err) res.sendStatus(500);
      res.sendStatus(200);
  });
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server started on port: ", 3000);
});


