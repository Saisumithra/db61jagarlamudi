 var express = require('express');
 const flower_controlers = require('../controllers/flowerbouquet');
 var router = express.Router();

 /* GET home page. */
 router.get('/',flower_controlers.flowerbouquet_view_all_Page);
/* GET detail flower page */
router.get('/detail', flower_controlers.flowerbouquet_view_one_Page);
/* GET create flower page */
router.get('/create', flower_controlers.flowerbouquet_create_Page);
/* GET create update page */
router.get('/update', flower_controlers.flowerbouquet_update_Page);
/* GET create flower page */
router.get('/delete', flower_controlers.flowerbouquet_delete_Page);

 module.exports = router;


//var express = require('express');
//const flowerbouquet_controllers= require('../controllers/flowerbouquet');
//var router = express.Router();
/* GET flowers */
//router.get('/', flowerbouquet_controllers.flowerbouquet_view_all_Page );
//module.exports = router;