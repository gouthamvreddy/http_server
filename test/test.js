'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var server = require('../server.js');

chai.use(chaiHttp);

describe('http server responds to GET/POST/PUT/DELETE requests', function() {

  it('POST should create new user file', function(){
    chai.request('http://localhost:3000')
        .post('/api/users/test')
        .send({name: "test", email: "testing@test.com"})
        .end(function(err, res) {
          expect(err).to.eql(null);
          done();
        });
    });

  it('GET should get test user name and email', function(done) {
    chai.request('http://localhost:3000')
        .get('/api/users/test')
        .end(function(err, res) {
          expect(err).to.eql(null);
          expect(res.body).to.eql('{"name":"test","email:"testing@test.com"}');
          done();
        });
  });


  it('POST respond with "File already exists!"', function(){
    chai.request('http://localhost:3000')
        .post('/api/users/test')
        .send({name: "test", email: "testing@test.com"})
        .end(function(err, res) {
          expect(err).to.eql(null);
          expect(res.body.msg).to.eql("File already exists!");
          done();
        });
    });

  it('PUT should update name and email for test user', function(){
    chai.request('http://localhost:3000')
        .put('/api/users/test')
        .send({name: "test2", email: "test2@test2.com"})
        .end(function(err, res) {
          expect(err).to.eql(null);
          done();
        });
    });

  it('DELETE should delete test file', function(){
    chai.request('http://localhost:3000')
        .delete('/api/users/test')
        .end(function(err, res) {
          expect(err).to.eql(null);
          done();
        });
    });

});
