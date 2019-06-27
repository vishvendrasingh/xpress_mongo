/*** Table Name ***/
const Base = require('./Base');

var collectionName = 'users';

/*** Same for all Models */
Base.collectionName = collectionName;

/*** exported for usage */
module.exports = Base;