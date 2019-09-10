const express = require('express');
const app = express();

app.get('/', function(req, res) {
	const sql = require("mssql");

	const config = {
		//check notepad
	};

	sql.connect(config, function(err) {
		if(err) {
			console.log(err);
		}

		let request = new sql.Request();

		request.query('SELECT * FROM tasks', function(err, recordset) {
			if(err) {
				console.log(err);
			}
			res.send(recordset);
		})
	});
});

const server = app.listen(5000, function () {
    console.log('Server is running...');
});