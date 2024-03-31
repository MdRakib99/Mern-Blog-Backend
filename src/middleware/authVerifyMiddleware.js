const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  let token = req.headers["token"];

  jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, decoded) {
    if (err) {
      res.status(401).json({ status: "unauthorize" });
    } else {
      let email = decoded["data"]["email"];
      let isAdmin = decoded["data"]["isAdmin"];
      req.headers.isAdmin = isAdmin;
      console.log(isAdmin, email);

      req.headers.email = email;
      next();
    }
  });
};
