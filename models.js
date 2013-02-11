var mongoose= require('mongoose');

var userSchema=mongoose.Schema({
	name: String,
	userID: String,
	picUrl: String,
	style: {backgroundCol: String, textSize: Number}
});

var User = mongoose.model('User',userSchema);

exports.User=User;
