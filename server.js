var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
    console.log("App is listening on PORT:" + PORT);
});

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(bodyParser.json({ type: 'application/++json' }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
app.use(bodyParser.text({ type: 'text/html' }))

require("./app/routing/html-routes.js")(app);

app.listen(PORT, function () {
    console.log('App listening on PORT:' + PORT);
});
