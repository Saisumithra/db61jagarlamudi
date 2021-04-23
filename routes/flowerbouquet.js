var express = require('express');
const flowerbouquet_controller= require('../controllers/flowerbouquet');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }
/* GET vegetables */
router.get('/', flowerbouquet_controller.flowerbouquet_view_all_Page );
/* GET update costume page */
router.get('/update', secured, flowerbouquet_controller.flowerbouquet_update_Page);
router.get('/create', secured, flowerbouquet_controller.flowerbouquet_create_Page);
router.get('/delete', secured, flowerbouquet_controller.flowerbouquet_delete_Page);
module.exports = router;
