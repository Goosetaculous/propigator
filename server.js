var express = require("express");
const app = express();
var PORT = process.env.PORT || 3000;
var path = require('path');
app.use(express.static(path.join(__dirname + '/')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/home.html'));
});

app.listen(PORT);
