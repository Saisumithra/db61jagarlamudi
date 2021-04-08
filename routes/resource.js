var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var flowerbouquet_controller = require('../controllers/flowerbouquet');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// palace ROUTES ///
// POST request for creating a flowerbouquet.
router.post('/resource/flowerbouquet', flowerbouquet_controller.flowerbouquet_create_post);
// DELETE request to delete flowerbouquet.
router.delete('/resource/flowerbouquet/:id', flowerbouquet_controller.flowerbouquet_delete);
// PUT request to update flowerbouquet.
router.put('/resource/flowerbouquet/:id', flowerbouquet_controller.flowerbouquet_update_put);
// GET request for one flowerbouquet.
router.get('/resource/flowerbouquet/:id', flowerbouquet_controller.flowerbouquet_detail);
// GET request for list of all palace items.
router.get('/resource/flowerbouquet', flowerbouquet_controller.flowerbouquet_list);
module.exports = router;