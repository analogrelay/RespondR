
/*
 * GET home page.
 */

exports.index = function(req, res) {
    res.render('index');
};

exports.index_post = function(req, res) {
    res.redirect('/' + req.param("code"));
};

exports.rsvp = function(req, res) {
    res.render('rsvp', { code: req.param('code') });
}

exports.admin = function(req, res) {
    res.render('admin');
}

exports.admin_post = function(req, res) {
    var crypto = require('crypto');
    var hash = crypto.createHash('sha256');
    hash.update(req.param('password'));
    var digest = hash.digest('hex');

    // Check the data file

}