
const mongoose = require('mongoose')

const {Schema} = mongoose;

const UserSchema = new Schema({
    firstname:String,
    lastname:String,
    email: {type: String, required:true, unique:true},
    password:{type: String, require:true},
	role:{type:String, default:"user"},
	imgUrl:String,
    isActive:{type:Boolean, default:true}
},{timestamps:true,
    versionKey: false
});

module.exports = mongoose.model('users', UserSchema);