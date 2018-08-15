var mongoose = require('mongoose');

// User model
var User = mongoose.model('User', {
    firstName: {
      type: String,
      required: true,
      minLength: 1,
      trim: true
    },
    lastName:{
      type: String,
      required: true,
      minLength: 1,
      trim: true
    },
  email: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  }
});

// var newUser = new User({
//     firstName: '    Vedran ',
//     lastName: ' Prica    ',
//     email: '   vprica3@gmail.com     '
// });
//
// newUser.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save user', e);
// });

module.exports = {User};
