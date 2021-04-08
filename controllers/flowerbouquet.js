var flowerbouquet = require('../models/flowerbouquet');
// List of all palaces
exports.flowerbouquet_list = async function(req, res) {
 res.send('NOT IMPLEMENTED: flowerbouquet list');
};
// List of all palaces
exports.flowerbouquet_list = async function(req, res) {
    try{
        flowerbouquet = await flowerbouquet.find();
    res.send(flowerbouquet);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
    };
// for a specific palace.
exports.flowerbouquet_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: palace detail: ' + req.params.id);
};
// Handle palace create on POST.
exports.flowerbouquet_create_post = async function(req, res) {
    console.log(req.body)
    let document = new flowerbouquet();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"palacetype":"goat", "cost":12, "size":"large"}
    document.flowername = req.body.flowername;
    document.numberofflowers = req.body.numberofflowers;
    document.deliverylocation = req.body.deliverylocation;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };

// Handle flowerbouquet delete form on DELETE.
exports.flowerbouquet_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: flowerbouquet delete DELETE ' + req.params.id);
};
// Handle flowerbouquet update form on PUT.
exports.flowerbouquet_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: flowerbouquet update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.flowerbouquet_view_all_Page = async function(req, res) {
    try{
    flowerbouquet = await flowerbouquet.find();
    res.render('flowerbouquet', { title: 'flowerbouquet Search Results', results: flowerbouquet });
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };