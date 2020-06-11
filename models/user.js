const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    position: String,
    name: String,
    company: String,
    company2: String,
    date: Date
});

const User = mongoose.model('User', UserSchema);


module.exports = User;