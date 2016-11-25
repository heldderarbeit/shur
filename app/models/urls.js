'use strict';

var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');
var ShortId = require('mongoose-shortid-nodeps');
var Schema = mongoose.Schema;

var Url = new Schema({
	// index is set so that the field is unique
	id: { type: ShortId, index: true, len: 4 },
	original_url: String
});

Url.plugin(findOrCreate);
module.exports = mongoose.model('Url', Url);