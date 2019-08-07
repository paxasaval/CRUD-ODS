const mongoose = require('mongoose');
const uniquevalidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let pruebaSchema = new Schema({
    state: {
        type: Boolean,
        required: [false, 'no es drequierido']
    },
    title: {
        type: String,
        required: [true, 'The title is required']
    },
    description: {
        type: String,
        required: [true, 'La decripcion es requerida']
    }
    
});
module.exports = mongoose.model('prueba', pruebaSchema);