const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  name: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        // required: true
    },
    uuid: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Account', AccountSchema);