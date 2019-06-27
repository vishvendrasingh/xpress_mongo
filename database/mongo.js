const MongoClient = require('mongodb').MongoClient, Logger = require('mongodb').Logger, ObjectId = require('mongodb').ObjectId;
const assert = require('assert');

var config = require('../config/config');

module.exports.connect = () => {
  return new Promise((resolve, reject)=>{
    MongoClient.connect(config.mongo.url,{ useNewUrlParser: true }, function(err, client) {
      assert.equal(null, err);
      if(err) reject(err);
      console.log("Connected successfully to mongo server");
      // Logger.setLevel('debug');
      resolve({db:client.db(config.mongo.dbName), client:client, ObjectId:ObjectId});
      // client.close();//not recommended for production
    });
  });
}