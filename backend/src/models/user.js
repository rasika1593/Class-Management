const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    fname: String,
    lname: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);