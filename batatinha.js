var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended : true}));

app.get('/', function(req, res) {
    res.render('index');
});


app.post('/contact', function(req, res){
res.render('reply', {name : req.body.name});
});

app.listen(3000, function(){
    console.log('I am working' + 3000);
});
