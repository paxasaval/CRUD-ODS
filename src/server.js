require('../config/config')
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');


//
server.use(cors());
server.use(bodyParser.urlencoded({
    extended: false
}));
server.use(bodyParser.json());
server.use(require('./routes/index'));
server.use(morgan('dev'));

server.use(express.urlencoded({extended: false}));


//cobecting to db

mongoose.connect('mongodb://localhost:27017/crud-ods', {
    useNewUrlParser: true
}, (err, res) => {
    if (err) throw error;
    console.log(`Mongo is working ${6 +7}`);
});

//importin routes
const indexRoutes = require('./routes/index');

//sentings
server.set('port', process.env.PORT || 3000);
server.set('views', path.join(__dirname,'views'));
server.set('view engine', 'ejs')

//midlaware
server.use('/static', express.static(__dirname + '/public'));


// routes
server.use('/',indexRoutes);

//starting server
server.listen(server.get('port'), () => {
    console.log(`Server on port ${server.get('port')}`)
})