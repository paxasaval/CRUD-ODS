const path = require('path');
const express = require('express');
const server = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

//cobecting to db
let urlDB;
if (process.env.NODE_ENV == 'dev') {
    urlDB = 'mongodb://localhost:27017/ods-crud';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB

mongoose.connect('mongodb://localhost:27017/ods-crud', {
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
server.use(morgan('dev'));
server.use(express.urlencoded({extended: false}));


// routes
server.use('/',indexRoutes);

//starting server
server.listen(server.get('port'), () => {
    console.log(`Server on port ${server.get('port')}`)
})