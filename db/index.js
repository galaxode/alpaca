var Sequelize = require('sequelize');

// ** Credentials for dev environment **
var db = new Sequelize('crashcourse', 'root', '');

// ** Credentials for deployment **
// var db = new Sequelize('crashcourse', 'root', '');
// mysql://b8e49f2d01a71a:ed74871a@us-cdbr-iron-east-03.cleardb.net/heroku_b6ba00aa71eaf7c?reconnect=true

var User = db.define('User', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING
}, {
  // timestamps: false // this will deactivate the timestamp columns
});

var Question = db.define('Question', {
  name: Sequelize.STRING,
  correct: Sequelize.STRING,
  wrong1: Sequelize.STRING,
  wrong2: Sequelize.STRING,
  wrong3: Sequelize.STRING,
  categories: Sequelize.STRING,
  testName: Sequelize.STRING
});

var Results = db.define('Results', {
  userID: Sequelize.INTEGER,
  category: Sequelize.STRING,
  correct: Sequelize.INTEGER,
  incorrect: Sequelize.INTEGER
});

// If we are adding columns or otherwise changing the schema
// we can add {force: true} inside .sync to drop the tables
// NOTE: THIS DELETES ALL THE DATA IN THE TABLE
User.sync()
  .then(function(err) {
    console.log('Created Users Table!');
  }, function (err) {
    console.log('An error occurred while creating the Users table:', err);
  });
Question.sync();
Results.sync();

exports.User = User;
exports.Question = Question;
exports.Results = Results;
