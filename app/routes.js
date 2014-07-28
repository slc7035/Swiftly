module.exports = function (app) {
    var readyToDeploy = false;
	// application -------------------------------------------------------------
    
	app.get('/', function(req, res) {
        console.log("In /");
		// load the single view file (angular will handle the page changes on the front-end)
        if (readyToDeploy) {
          console.log("Deploy index.html");
		  res.sendfile('./public/index.html', function(err) {
          console.log(err);
          }); 
        } else {
            console.log("Deploy inProgress.html");
          res.sendfile('./public/inProgress.html', function(err) {
            console.log(err);
          });
        }
	});
    /*
    app.get('/public/index.html', function(req, res) {
        res.sendfile('./public/index.html', function(err) {
            console.log(err);
          }); 
    });
    */
    
    app.get('/public/inProgress.html', function(req, res) {
        res.sendfile('./public/inProgress.html', function(err) {
            console.log(err);
          }); 
    });
    
    app.get('/public/css/style.css', function(req, res) {
        res.sendfile('./public/css/style.css', function(err) {
            console.log(err);
          }); 
    });
    
    /*
    app.get('/public/css/stevencrespo.css', function(req, res) {
        res.sendfile('./public/css/stevencrespo.css'); 
    });
    */
    
};