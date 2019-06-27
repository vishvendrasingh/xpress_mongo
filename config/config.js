var config = {
	noAuthRoutes : [
		'/api/auth',
		'/api/auth/decode'
	],
	tokenExpiration:'2592000',
	secret:'1234',
	mongo: {
		connectionLimit: 100,
		url: 'mongodb://localhost:27017',
		dbName: 'test'
	}
}

module.exports = config