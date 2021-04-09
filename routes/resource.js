var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var flowerbouquet_controller = require('../controllers/flowerbouquet');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/flowerbouquet', flowerbouquet_controller.flowerbouquet_create_post);
// DELETE request to delete Costume.
router.delete('/flowerbouquet/:id', flowerbouquet_controller.flowerbouquet_delete);
// PUT request to update Costume.
router.put('/flowerbouquet/:id', flowerbouquet_controller.flowerbouquet_update_put);
// GET request for one Costume.
router.get('/flowerbouquet/:id', flowerbouquet_controller.flowerbouquet_detail);
// GET request for list of all Costume items.
router.get('/flowerbouquet', flowerbouquet_controller.flowerbouquet_list);
module.exports = router;