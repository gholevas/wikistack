var express = require( 'express' );
var app = express(); 
var morgan = require('morgan');
var swig  = require('swig');
require('./filters')(swig);
var indexRouter = require('./routes');
var wikiRouter = require('./routes/wiki.js');
var bodyParser = require('body-parser');


app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', './views');
swig.setDefaults({ cache: false });


var server = app.listen(3001);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan('tiny'));
app.use(express.static('public'));
app.use('/', wikiRouter);
app.use('/wiki', wikiRouter);


