var mongoose = require('mongoose');
var User = require('../models/users');

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app.js');
var should = chai.should();

chai.use(chaiHttp);

describe('Users', function () {
  beforeEach(function (done) {
    User.remove({}, function (err) {
      done();
    });
  });

  describe('/GET sign-up', function () {
    it('it shoud return a sign up page', function (done) {
      chai.request(server)
        .get('/users/sign-up')
        .end(function (err, res) {
          res.status.should.equal(200);
          done();
        })
    });
  });
});