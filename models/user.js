const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    bio: String,
    snapchat: String,
    facebook: String,
    tikTok: String,
    email: String,
    dateCreated: Date
});

const User = mongoose.model('User', UserSchema);


module.exports = User;