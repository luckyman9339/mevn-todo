const { Schema, model } = require("mongoose");

const Token = new Schema({
    tokenId: {required: true, type: String, unique: true},
    userId: {required: true, type: String, unique: true}
});

module.exports = model("Token", Token)