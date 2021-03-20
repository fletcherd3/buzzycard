const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    bio: String,
    snapchat: String,
    facebook: String,
    tikTok: String,
    email: String,
    instagram: String,
    github: String,
    site_link: String,
    site_name: String,
    googleDrive: String,
    dateCreated: Date,
    linkedin: String
});

const User = mongoose.model('User', UserSchema);


module.exports = User;