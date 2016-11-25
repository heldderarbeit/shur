'use strict';

var normalizeUrl = require('normalize-url');
var validUrl = require('valid_url');
var Url = require('../models/urls');

const invalidUrl = 'invalid?allow=true';

function UrlHandler () {

    this.createShurl = function (req, res) {
    	
	    var originalUrl = normalizeUrl(req.originalUrl.split('/new/')[1]);

	    if (!validUrl(originalUrl) && (originalUrl.replace('http://', '').replace('/', '') !== invalidUrl)) {
	        res.send({ error: 'input doesn\'t look like an URI' });
	    } else {
	        if (originalUrl.replace('http://', '').replace('/', '') === invalidUrl) originalUrl = 'invalid';
	        
            Url.findOrCreate({ 'original_url': originalUrl }, function(err, url, created) {
                if (err) console.error('could not work with the url database:', err);
                
                res.send({
                    'original_url': url.original_url, 
                    'short_url': process.env.APP_URL + url.id 
                });
            });
	    }
	};
	
	this.redirectToShurl = function (req, res) {
		
	    Url.findOne({ 'id': req.params.shortUrl }, function(err, url) {
	        if (err) console.error('could not search the url database:', err);
	        
	        if (url) {
                res.redirect(url.original_url); 
	        } else {
	            res.send({ error: 'no short url found for code "'  + req.params.shortUrl + '"'});
	        }
	    });
	};
}

module.exports = UrlHandler;