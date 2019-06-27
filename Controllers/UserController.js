var UserService = require('../Services/UserService');

exports.products = (req, res, next) => {
	UserService.fetchProducts({id: '5d14fd62eca4263eb346f0c6'})
	.then((r)=> {
		res.json(r);
	}).catch( (e) => {
		res.json(e);
	});
};

exports.profile = (req, res, next) => {
	UserService.fetchUser({'id': '5d14fd62eca4263eb346f0c6'})
	.then((r)=> {
		res.json(r);
	}).catch( (e) => {
		res.json(e);
	});


};