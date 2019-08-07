const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let odsSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'Se requiere el nombre del objetivo']
    },
    objetivo: {
        type: String,
        required: [true, 'Se requiere un breve descripcion del objetivo']
    },
    descripcion: {
        type: [String],
        required: [true, 'Se requiere una descripcion tipo parrafo del objetivo']
    },
    metas: {
        type: [String],
        required: [false]
    },
    objetivos: {
        type: [String],
        require: [false]
    }

})