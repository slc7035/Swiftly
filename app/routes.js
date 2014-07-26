module.exports = function (app) {
	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		// load the single view file (angular will handle the page changes on the front-end)
		res.sendfile('./public/index.html'); 
	});
};