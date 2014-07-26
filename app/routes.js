module.exports = function (app) {
	// application -------------------------------------------------------------
	app.route('*')
    .get(function(req, res, next) {
		// load the single view file (angular will handle the page changes on the front-end)
		res.sendfile('./public/index.html'); 
	});
};