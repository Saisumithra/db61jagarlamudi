var flowerbouquet = require('../models/flowerbouquet');
// List of all flowerbouquet
exports.flowerbouquet_list = async function(req, res) {
    try{
        flowerbouquet = await flowerbouquet.find();
        res.send(flowerbouquet);
        } catch(err){
          res.status(500).send(`{"error": ${err}}`);
        }
};
// for a specific flowerbouquet
exports.flowerbouquet_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        console.log("check")
        result = await flowerbouquet.findById(req.params.id)
        console.log(result)
        res.send(result)
    } catch (error) {
       res.status(500).send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle flowerbouquet create on POST.
exports.flowerbouquet_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: flowerbouquet create POST');
};
// Handle flowerbouquet delete form on DELETE.
exports.flowerbouquet_delete = function(req, res) {
res.send('NOT IMPLEMENTED: flowerbouquet delete DELETE ' + req.params.id);
};
// Handle flowerbouquet update form on PUT.
exports.flowerbouquet_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await flowerbouquet.findById(req.params.id)
        // Do updates of properties
        if(req.body.flowername) toUpdate.flowername = req.body.flowername;
        if(req.body.numberofflowers) toUpdate.numberofflowers = req.body.numberofflowers;
        if(req.body.deliverylocation) toUpdate.deliverylocation = req.body.deliverylocation;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
 
};
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
