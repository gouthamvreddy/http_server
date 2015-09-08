var index = require('../index');
var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('http server responds to GET/POST/PUT/DELETE requests', function() {
  it('should GET', function(done) {
    chai.request('localhost:3000')
        .get('/api')
        .query({query: 'name'})
        .end(function(err, res) {
          expect(err).to.eql(null);
          expect(res).to.be.html;
          done();
        });
      });
/*
  it('should GET', function(){

    expect();
  });

  it('should POST', function(){
    expect();

  });f

  it('should PUT', function(){
    expect();
  });

  it('should DELETE', function(){
    expect();
    */

});
