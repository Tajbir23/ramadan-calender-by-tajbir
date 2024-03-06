const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    uid: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Account', accountSchema);