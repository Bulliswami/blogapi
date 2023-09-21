const jwt = require("jsonwebtoken");
require("dotenv").config(); 
const verifyToken = token => {
  return jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    console.log(err);
    if (err) {
      return false;
    } else {
      return decoded;
    }
  });
};

module.exports = verifyToken;
