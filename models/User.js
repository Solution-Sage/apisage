var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    UserSchema = null;

UserSchema = new Schema({
    username: String,
    password: String,
    email: String,
    role: String,
    apps: Array,
    createAt: Date,
    updateAt: Date
});

UserSchema.statics = {
    getUserByUsername: function(username, cb) {
        return this.find({
            username: username
        }).exec(function(err, users) {
            if (err) {
                return cb(err, null);
            } else {
                return cb(null, users); 
            }
        });
    },

    addUser: function(user, cb){
        var User = this.model('User');
        var user = new User({
            username: 'edison',
            password: '123456',
            age: 18
        })
        return user.save(user, function(err){
            cb(err);
        });
    }
}

module.exports = mongoose.model('User', UserSchema, 'User');


