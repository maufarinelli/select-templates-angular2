module.exports = function(app) {
	app.get('/templates', function(req, res) {
		res.sendFile('./templates.json', { root: __dirname });
	});
};