var mongoose = require('mongoose'),
    SchemaSchema = null;

SchemaSchema = new mongoose.Schema({
    appName: String, // 所属应用名
    name: String, // 文档名(表明)
    json: String, // 文档结构
    acl: Array, // 访问控制，默认无，有role，则表示这些role可以访问
    createAt: Date,
    updateAt: Date
});

SchemaSchema.statics = {
    getSchemasByAppName: function(appName) {

    },

    getSchemaByModelName: function(name, cb) {
        return this.find({
            name: name
        }).exec(function(err, schema) {
            if (err) {
                return cb(err, null);
            } else {
                return cb(null, schema);
            }
        });
    },

    addSchema: function(appName, schemaName, structJson, acl, cb) {

        var createAt = updateAt = new Date();

        var Schema = this.model('Schema');
        var schema = new Schema({
            appName: appName,
            name: schemaName,
            json: structJson,
            acl: acl,
            createAt: createAt,
            updateAt: updateAt
        });

        schema.save(function(err){
            cb();
        });
    }
}

module.exports = mongoose.model('Schema', SchemaSchema, 'Schema');
