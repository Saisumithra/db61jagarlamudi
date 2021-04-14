var flowerbouquet = require('../models/flowerbouquet');
// List of all flowerbouquet
exports.flowerbouquet_list = async function (req, res) {
    try {
        flowerbouquet = await flowerbouquet.find();
        res.send(flowerbouquet);
    } catch (err) {
        res.send(`{"error": ${err}}`);
        res.status(500);
    }
};
// for a specific flowerbouquet
exports.flowerbouquet_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await flowerbouquet.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle dog create on POST.
exports.flowerbouquet_create_post = async function (req, res) {
    console.log(req.body)
    let document = new flowerbouquet();


    document.flowername = req.body.flowername;
    document.numberofflowers = req.body.numberofflowers;
    document.deliverylocation = req.body.deliverylocation;

    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};
// Handle flowerbouquet delete form on DELETE.
exports.flowerbouquet_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: flowerbouquet delete DELETE ' + req.params.id);
};
// Handle flowerbouquet update form on PUT.
exports.flowerbouquet_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await flowerbouquet.findById(req.params.id)
        // Do updates of properties
        if (req.body.flowername) toUpdate.flowername = req.body.flowername;
        if (req.body.numberofflowers) toUpdate.numberofflowers = req.body.numberofflowers;
        if (req.body.deliverylocation) toUpdate.deliverylocation = req.body.deliverylocation;
        let result = await toUpdate.save();
        console.log("Sucess " )
        res.send({"flowername":"Lavender","numberofflowers":"11","deliverylocation":"missouri"})
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }

};
// Handle a show all view
exports.flowerbouquet_view_all_Page = async function (req, res) {
    try {
        flowerbouquet = await flowerbouquet.find();
        console.log("njfndw")
        res.render('flowerbouquet', {
            title: 'flowerbouquet Search Results',
            results: flowerbouquet
        });
    } catch (err) {
        res.send(`{"error": ${err}}`);
        res.status(500);
    }
};

// Handle flowerbouquet delete on DELETE.
exports.flowerbouquet_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await flowerbouquet.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle a show one view with id specified by query
exports.flowerbouquet_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await flowerbouquet.findById(req.query.id)
        console.log(result)
        res.render('flowerdetail', {
            title: 'flowerbouquet Detail',
            toShow: {"_id":"6074a7b664d9f248cc21b12a","flowername":"Lavender","numberofflowers":10,"deliverylocation":"missouri"}

        });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a flowerbouquet.
// No body, no in path parameter, no query.
// Does not need to be async
exports.flowerbouquet_create_Page = async function (req, res) {
    console.log("create view")
    try {
        res.render('flowercreate', {
            title: 'flowerbouquet Create'
        });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a flowerbouquet.
// query provides the id
exports.flowerbouquet_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await flowerbouquet.findById(req.query.id)
        res.render('flowerupdate', {
            title: 'flowerbouquet Update',
            toShow: {"_id":"6074a7b664d9f248cc21b12a","flowername":"Lavender","numberofflowers":10,"deliverylocation":"missouri"}
        });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle flower delete on DELETE.
exports.flower_delete = async function(req, res) {
    console.log("delete "  + req.params.id)
    try {
        result = await flowerbouquet.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle a delete one view with id from query
exports.flowerbouquet_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await flowerbouquet.findById(req.query.id)
        res.render('flowerdelete', {
            title: 'flowerbouquet Delete',
            toShow: result
        });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};