var bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = '!n1P@5sW0rd';
const someOtherPlaintextPassword = 'not_bacon';

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // Store hash in your password DB.
  });
