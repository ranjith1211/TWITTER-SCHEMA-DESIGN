const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    username:{type: String, required: true},
    password:{type: String, required: true},
    mail:{type: String, required: true},
    website:{type: String, required: true},
    bio:{type: String, required: true},
    place:{type: String, required: true},
    profilePicture:{type: String, required: true},
    bannerPicture:{type: String, required: true},
    joined_Date:{type:Date,default:Date.now},
    following: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    followers: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    likedTweets: [{ type: Schema.Types.ObjectId, ref: 'twitter' }],
    twitter: [{ type: Schema.Types.ObjectId, ref: 'twitter' }],
    bookmarks:[{ type: Schema.Types.ObjectId, ref: 'twitter' }],
});

var user = mongoose.model('user', userSchema);

module.exports = user

