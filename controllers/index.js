var db = require('../db');

module.exports = {
  // in quiz page, GET request will return object of all quiz Q's and A's
  questions: {
    get: function (req, res) {
      db.Question.findAll()
        .then(function(questions) {
          res.json(questions);
        });
    },
    // in quiz Creation page, POST request will add an entry into database
    post: function (req, res) {
          db.Question.create({
            name: req.body.name,
            correct: req.body.correct,
            wrong1: req.body.wrong1,
            wrong2: req.body.wrong2,
            wrong3: req.body.wrong3,
          }).then(function(question) {
            res.sendStatus(201);
          });
    }
  },
  user: {
    // in signing page, GET request will check for username and return pass
    get: function (req, res) {
      db.User
        .find({ where: { username: req.body.username } })
        .then(function(err, userReturn) {
          if (!userReturn) {
            console.log('No user with username "' + req.body.username + '" was found.');
          } else {
            console.log('Hello ' + userReturn.username + '!');
            console.log('All attributes of john:', userReturn.get());
          }
        });
    },
    // in sign-up page, POST request will create user entry into database
    post: function (req, res) {
          db.User.create({
            username: req.body.username,
            password: generatePasswordHash(req.body.password)
          }).then(function(user) {
            res.sendStatus(201);
          });
    }
  }
};
