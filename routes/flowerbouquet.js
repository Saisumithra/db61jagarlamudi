// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('flowerbouquet', { title: 'Search Results' });
// });

// module.exports = router;


var express = require('express');
const flowerbouquet_controllers= require('../controllers/flowerbouquet');
var router = express.Router();
/* GET costumes */
router.get('/', flowerbouquet_controllers.flowerbouquet_view_all_Page );
module.exports = router;