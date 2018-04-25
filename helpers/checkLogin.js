const bcrypt = require('bcrypt');

function checkLogin(bodyPassword, dbPassword){
    return bcrypt.compareSync(bodyPassword, dbPassword); // true
}

module.exports = checkLogin