const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email_id: String,
    password: String,
    user_role: String
},{
    timestamps: true
});

module.exports = mongoose.model('Users',UsersSchema);