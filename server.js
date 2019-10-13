const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var index = require('./routes/index');

var port = 80;
var app = express();

app.use(express.static(path.join(__dirname, 'dist/mean-course')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('*',function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/mean-course/index.html'));
});

app.listen(port, function(){
    console.log("Server running on localhost:" + port);
})
