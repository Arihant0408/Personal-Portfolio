const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MessageSchema= new Schema({
    name: String,
    email: String,
    subject:String,
    message:String

});

module.exports = mongoose.model('Message', MessageSchema);