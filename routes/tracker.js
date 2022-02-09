const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');
const Tracker = require('../models/Tracker');

// @route   GET api/trackers
// @desc    Get all the data
// @access  Private
router.get('/', auth , async (req, res) => {
    try {
        const trackers = await Tracker.find({ user: req.user.id }).sort({
            date: -1
        });
        res.json(trackers);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

// @route   POST api/trackers
// @desc    Add a new data
// @access  Private
router.get('/', [auth, [
    check('amount', 'amount is required').not().isEmpty(),
    check('desc', 'desc is required').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);

    if(!error.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { amount, desc } = req.body;

    try {
        const newTracker = new Tracker({
            ammount,
            desc,
            user: req.user.id
        });

        const tracker = await newTracker.save();

        res.json(tracker)

    } catch(err) {
        console.error(err.message);
        res.status(400).send('Server Error')
    }
})

// @route   PUT api/trackers/:id
// @desc    Update data
// @access  Private
router.put('/:id', auth , async (req, res) => {

    const { amount , desc } = req.body;

    const trackerFields = { };

    if(amount) trackerFields.amount = amount;
    if(desc) trackerFields.desc = desc;

    try {
        let tracker = await Tracker.findById(req.params.id);

        if(!tracker) return res.status(404).json({ msg:'This expense does not exist.' })

        if(tracker.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'You do not have a correct authorization to update this contact' })
        }

        tracker = await Tracker.findByIdAndUpdate(req.params.id, 
                { $set: trackerFields },
                { new: true }
            )
            res.json(tracker)
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

// @route   DELETE api/trackers/:id
// @desc    Delete data
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        let tracker = await Tracker.findById(req.params.id);

        if(!tracker) return res.status(404).json({ msg: 'This expense does not exist.' })

        await Tracker.findByIdAndRemove(req.params.id)

        res.json({ msg: 'This Expense has been removed' })
    } catch(err) {
        
    }
    res.send('Delete data')
})

module.exports = router;