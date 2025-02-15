const fs = require("fs");

module.exports = {
  devServer: {
    overlay: false,
    // https: {
    //   key: fs.readFileSync("../cert/localhost-key.pem"),
    //   cert: fs.readFileSync("../cert/localhost.pem"),
    // },
  },
  lintOnSave: false,
};
