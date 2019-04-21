var express = require('express');
var router = express.Router();
var fetch = require("node-fetch");
/* GET home page. */
router.get('/', function(req, res, next) {
  var regexp = /https:\/\/\w{1,}[.]\w{1,}[.]\w{3,3}\/\d{2,2}\/\d\/\w{1,}\/\d{1,}\/\d{1,}\/\w{1,}[.]mp4/g
  fetch("https://www.rapidvideo.com/e/G1H7KS9P1I&q=720p")
  .then(res => res.text())
  .then(body => {
    //console.log(body);
    var data = body;
    var urls = data.match(regexp);
    if (urls) {
      console.log(urls);
    }
    if (data.match(/We are sorry!/g)) {
      console.log(false);
    } else if (data.match(/You have exhausted 5/g)) {
      console.log(false);
    } else if (data.match(/You have watched over 60/g)){
      console.log(false);
    } else {
      console.log(true);
    }

    res.status(200).json({
      "ok":"ok"
    });
  });
});

module.exports = router;
