var mongoose = require('mongoose');
var User = require('../models/users');

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app.js');
var should = chai.should();

chai.use(chaiHttp);

//parent block
describe('Users', function () {
  
  //hook for clearing data before each test
  beforeEach(function (done) {
    User.remove({}, function (err) {
      done();
    });
  });

  //test the /GET request for sign up page
  describe('/GET sign-up', function () {
    it('it shoud return a sign up page', function (done) {
      chai.request(server)
      .get('/users/sign-up')
      .end(function (err, res) {
        res.should.have.status(200);
        done();
      });
    });
  });

  //test the /POST request for creatin user
  describe('/POST sign-up', function () {
    it('it shoud return a json confirmation', function (done) {
      var user = {
        userName: 'rm sundaram',
        email: 'rmsundaram@gmail.com',
        password: '123456'
      };

      chai.request(server)
      .post('/users/sign-up')
      .send(user)
      .end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('success').eql(true);
        res.body.should.have.property('message').eql('Successfully registered user.');
        done();
      });
    });
  });
});