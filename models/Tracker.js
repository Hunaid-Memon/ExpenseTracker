const mongoose = require('mongoose');

const TrackerSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    amount: {
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('tracker', TrackerSchema);


