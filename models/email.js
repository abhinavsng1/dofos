var mongoose = require("mongoose");

var mailSchema = mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String

    
});
mailSchema.set('toObject', {
versionKey: false,
transform: (doc, ret) => {
delete ret.__v;
return ret;
},
});

module.exports = mongoose.model("Mail", mailSchema);