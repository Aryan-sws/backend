const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   fullname: {
       type: String,
       require: true,
   },
   phone: Number,
   address: {
       type: String,
       minlength: 4,
       maxlength :10
   },
   password: {
       type:String,
       require: true
    },
    email: {
        type: String
    //     trim: true,
    //     lowercase: true,
    //     unique: true,
    //     required: 'Email address is required',
    //     // validate: [validateEmail, 'Please fill a valid email address'],
    //     match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
     },
    
})

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

module.exports = mongoose.model('users',userSchema);