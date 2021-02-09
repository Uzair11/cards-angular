var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    "Filename":"CB_BusCard_TGoodwin.pdf", "Name":"Tracey Goodwin", "Mobile":"+61 417 467 631",
    "Email":"traceygoodwin66@gmail.com",
    "ScanCodeURLAddress":`http://clubbillion.com/Guid_6553322189+1xc2*sflkjdsyydsnnsdnpppkk_kaksndydybvdndyahwttfjkfjfbf;s;ljd*_hdhfhfhMHQYYAPPLSYSYSjjndnd&ggplyiusbcwwaplkyt`
});
});

module.exports = router;
