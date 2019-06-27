/***
 * put repository inside only to prevent conflict
 */

var UserModel = require('../Models/User');

module.exports.authenticate = (params) => {    
    return new Promise((resolve, reject)=>{
        const collection = UserModel.db.db.collection(UserModel.collectionName);
        collection.find(params).toArray(function(err, docs) {
        // collection.find().toArray(function(err, docs) {
            if(err) reject(err);
            if(docs==undefined || docs==null) reject(err);
            resolve(docs);
        })
    });
}

module.exports.fetchUser = (params) =>  {
    return new Promise((resolve, reject)=>{
        const collection = UserModel.db.db.collection(UserModel.collectionName);
        collection.find({_id:UserModel.db.ObjectId(params.id)}).toArray(function(err, docs) {
        // collection.find().toArray(function(err, docs) {
            if(err) reject(err);
            if(docs==undefined || docs==null) reject(err);
            resolve(docs);
        })
    });
}


module.exports.fetchProducts = (params) =>  {
    return new Promise((resolve, reject)=>{
        const collection = UserModel.db.db.collection(UserModel.collectionName);
        collection.aggregate([
                {
                  $lookup:
                    {
                      from: "product",
                      localField: "_id",
                      foreignField: "user_id",
                      as: "products"
                    }
               },
               { $match : { _id : UserModel.db.ObjectId(params.id) } }
            ])
            .toArray(function(err, docs) {
            if(err) reject(err);
            if(docs==undefined || docs==null) reject(err);
            resolve(docs);
        })
    });
}