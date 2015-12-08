var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    RoleSchema = null;

RoleSchema = new Schema({
    name: String,
    createAt: Date,
    updateAt: Date
});

RoleSchema.statics = {}

module.exports = mongoose.model('Role', RoleSchema, 'Role');
