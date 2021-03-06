const mongoose = require("mongoose"),
    passportLocalMongoose = require('passport-local-mongoose');

// SCHEMA SETUP
var userSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);