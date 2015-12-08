var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    AppSchema = null;

AppSchema = new Schema({
    name: String,
    owner: String,
    createAt: Date,
    updateAt: Date
});

AppSchema.statics = {}

module.exports = mongoose.model('App', AppSchema, 'App');
