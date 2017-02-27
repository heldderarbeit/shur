'use strict';

var path = process.cwd();
var UrlHandler = require(path + '/app/controllers/urlHandler.server.js');

module.exports = function (app) {
    
    var urlHandler = new UrlHandler();
    
    app.route('/')
        .get(function (req, res) {
            res.render('index.pug', {
                app_url: process.env.APP_URL,
                example_id: process.env.EXAMPLE_ID
            });
        });
          
    app.route('/new/*')
        .get(urlHandler.createShurl); 
        
    app.route('/:shortUrl')
        .get(urlHandler.redirectToUrl);
};