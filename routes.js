module.exports = function(app) {

	// api controller
    var api = require('./controllers/api');
    app.get('/api', api.getUserByUsername);
    app.get('/api/add', api.addUser);

    app.get('/test',api.test)
    app.get('/test/schema', api.getSchema)
    app.get('/test/schemaAdd', api.addSchema)
    
    // var account = require('./controllers/account');
    // app.get('/login', account.login);
    // app.get('/register', account.register);

    // var model = require('./controllers/model');
    // app.get('/model/add');

}
