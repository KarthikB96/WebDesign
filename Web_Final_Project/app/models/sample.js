// app/models/sample.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our sample model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Sample', {
    email : {type : String, default: ''},
    password:{type : String,default:""},
    cart:[{
        productName : {type:String,default:""},
        productPrice : {type:String,default:""},
        quantity:{type:String,default:""}
        }],
    wishlist:[{
        productName : {type:String,default:""},
        productPrice : {type:String,default:""}
    }]
});