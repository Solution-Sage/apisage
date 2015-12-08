var User = require('../models/User');

exports.getUserByUsername = function(req, res) {
    return User.getUserByUsername('edison', function(err, user) {
        console.log('find')
        console.log('User controller callback.')
        res.send(user)
    });
}

exports.addUser = function(req, res) {
    console.log('add')
    var user = {
        'name': 'edison',
        'age': 29
    }
    return User.addUser(user, function(err) {
        res.send(err);
    });
}

exports.getSchema = function(req, res) {

	// res.send('aaa')
	console.log(00)
    var Schema = require('../models/Schema');
    console.log(1)
    Schema.getSchemaByModelName('User', function(err, schema) {
        res.send(schema);
    });
    
    // Schema.getSchemasByAppName('aaa', function(){
    // 	res.send('ok')
    // })
    
    res.send('ok')
}

exports.addSchema = function(req, res){
	var Schema = require('../models/Schema');
	Schema.addSchema('appName1', 'schemaName', 'structJson', 'acl', function(){
		res.send('ook')
	})
}

exports.test = function(req, res) {

    // 动态创建schema 和 model

    var schemaName = modelName = 'kkk';
    var mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        mySchema = null,
        MyModel = null,
        params = JSON.parse('{"username": "String"}');

    if (!mongoose.modelSchemas[schemaName]) {
        mySchema = new Schema(params);
    } else {
        mySchema = mongoose.modelSchemas[schemaName];
    }

    if (!mongoose.models[modelName]) {
        MyModel = mongoose.model(modelName, mySchema, modelName);
    } else {
        MyModel = mongoose.models[modelName];
    }


    console.log(mongoose)

    var myModel = new MyModel({
        username: 'lucy'
    });

    myModel.save(function() {
        res.send('ok')
    });

}
