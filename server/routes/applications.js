var express = require('express');
var router = express.Router();
const Application = require('../models/applications');
const xlsxFunctions = require('../xlsx/xlsx')

/* GET home page. */
router.get('/', async function(req, res) {
    try {
        const applications = await xlsxFunctions.find();
        //const applications = await Application.find();
        res.json(applications);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
});

router.get('/:id', getApplication, async function(req, res) {
    res.send(res.application)
});

router.post('/', async function(req, res) {
    const application = new Application({
        jobName: req.body.jobName,
        jobDescription: req.body.jobDescription,
        company: req.body.company
    });
    try {
        const newApplication = await xlsxFunctions.post(application);
        //const newApplication = await application.save();
        res.status(201).json(newApplication);
    } catch(err) {
        res.status(400).json({message: err.message});
    }
});

// Patch is meant to only change things that are sent in the request
router.patch('/:id', getApplication, async function(req, res) {
    if(req.body.jobName != null){
        res.application.jobName = req.body.jobName;
    }
    if(req.body.jobDescription != null){
        res.application.jobDescription = req.body.jobDescription;
    }
    if(req.body.company != null){
        res.application.company = req.body.company;
    }
    try {
        const updatedApplication = await res.application.save();
        res.json(updatedApplication);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', getApplication, async function(req, res) {
    try {
        await xlsxFunctions.remove(req.params.id);
        //await res.application.remove();
        res.json({message: 'Application deleted'});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Find application with given id
async function getApplication(req, res, next) {
    let application;
    try {
        application = await xlsxFunctions.findById(req.params.id);
        //application = await Application.findById(req.params.id);
        if(application == null){
            return res.status(404).json({ message: `Application with id ${req.params.id} not found`})
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
    // Save application object to res object to access after middleware is called
    res.application = application;
    next();
}

module.exports = router;
