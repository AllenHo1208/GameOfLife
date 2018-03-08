const express = require('express');

const app = express();
app.use(express.static(require('path').resolve(__dirname, 'client')));

const server = app.listen(process.env.PORT || 3005, function () {
	console.log("App now running on port", server.address().port);
});