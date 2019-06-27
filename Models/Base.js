const mongoClient = require('../database/mongo.js');

mongoClient.connect().then( (db) => {
    module.exports.db = db;
})