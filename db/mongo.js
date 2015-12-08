var mongoose = require('mongoose');
var setting = require('../setting');

conn = mongoose.connection;

conn.on('connected', function() {
    return console.log('mongodb connected.');
});

mongoose.connect('mongodb://' + setting.host + '/' + setting.db, {
    server: {
        poolSize: 3
    }
});

exports.disconnect = function() {
    return mongoose.disconnect(function() {
        return console.log('all mongodb connections closed');
    });
}
